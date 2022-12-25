import {expect} from 'chai';
import {iter} from '../../../../src/array';

describe('iter', () => {
  it('should iter', () => {
    let count = 0;
    const fn = iter(() => count++);
    expect(count).to.eql(0);
    expect(fn([0, 0, 0])).to.eql([0, 0, 0]);
    expect(count).to.eql(3);
  });
});
