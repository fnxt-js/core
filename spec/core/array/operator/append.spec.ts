import {append} from '../../../../src/array';
import {expect} from 'chai';

describe('append', () => {
  it('should append', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];

    expect(append(array1)(array2)).to.eql([1, 2, 3, 4, 5, 6]);
    expect(array1).to.eql([1, 2, 3]);
    expect(array2).to.eql([4, 5, 6]);
  });
});
