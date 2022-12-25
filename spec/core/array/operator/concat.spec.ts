import {concat} from '../../../../src/array';
import {expect} from 'chai';

describe('concat', () => {
  it('should concat', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5];
    const array3 = [6, 7, 8, 9];

    expect(concat([array1, array2, array3])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect([array1, array2, array3]).to.eql([[1, 2, 3],[4, 5],[6, 7, 8, 9]]);
  });
});
