import {exists, None, Some} from '../../../../src/option';
import {expect} from 'chai';

describe('exists', () => {

  it('should exists', () => {
    const some41 = Some(41);
    const fn = exists((e: number) => e < 42);
    expect(fn(some41)).to.eql(true);
  });

  it('should not exists', () => {
    const some42 = Some(42);
    const fn = exists((e: number) => e < 42);
    expect(fn(some42)).to.eql(false);
  });

  it('should not exist if none', () => {
    const none = None;
    const fn = exists((e: number) => e < 42);

    expect(fn(none)).to.eql(false);
  });

});
