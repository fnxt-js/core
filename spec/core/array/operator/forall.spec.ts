import {expect} from 'chai';
import {forall, range} from '../../../../src/array';

describe('forall', () => {
  it('should forall', () => {
    expect(forall<number>(e => e >= 0)(range(0, 10))).to.be.true;
    expect(forall<number>(e => e > 10)(range(0, 10))).to.be.false;
    expect(forall<number>(e => e >= 0)(range(0, 10))).to.be.true;
    expect(forall<number>(e => e > 0)(range(0, 10))).to.be.false;
    expect(forall<number>(e => e < 10)(range(0, 10))).to.be.true;
    expect(forall<number>(e => e != 7)(range(0, 10))).to.be.false;
    expect(forall<number>(e => e != 0)(range(0, 10))).to.be.false;
    expect(forall<number>(e => e != 9)(range(0, 10))).to.be.false;
  });
});
