import {expect} from 'chai';
import 'mocha';
import {chain, pipe} from '../../src/pipe';
import {bind as bindResult, map as mapResult, Result, Success} from 'fnxt/result';

describe('pipe', () => {
  it('should pipe', () => {
    const fn = pipe(
      (x: number) => x + 1,
      x => x * 2,
    );
    expect(fn(3)).to.eql(8);
  });

  it('should be identity', () => {
    const fn = pipe();
    expect(fn(42)).to.eql(42);
  });

});

describe('chain', () => {
  it('should evaluate', () =>
    expect(chain(2).value).to.eql(2)
  );
  it('should pipe and evaluate', () =>
    expect(chain(2)
      .pipe(e => `${e * 5}`)
      .pipe(e => e + 2)
      .pipe(e => +e)
      .value
    ).to.eql(102)
  );
  it('should handle results', () =>
    expect(chain(Success(2))
      .pipe(mapResult(e => e * 2))
      .pipe(bindResult(e => Success(e * 2)))
      .value
    ).to.eql(Success(8))
  );
});