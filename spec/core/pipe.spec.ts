import { expect } from 'chai';
import 'mocha';
import {pipe} from 'fnxt/pipe';

describe('pipe', () => {
  it('should pipe', ()=> {
    const fn = pipe(
      (x:number) => x+1,
      x => x*2,
    );
    expect(fn(3)).to.eql(8);
  });

  it('should be identity', ()=> {
    const fn = pipe();
    expect(fn(42)).to.eql(42);
  });

});
