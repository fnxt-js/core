import {expect} from 'chai';
import {copy} from '../../../../src/array';

describe('copy', () => {
  it('should copy', () => {
    const array = [1, 2, 3, 4,];
    const cpy = copy(array);
    expect(cpy).to.eql([1, 2, 3, 4,]);
    array[0] = 0;
    expect(array).to.eql([0, 2, 3, 4,]);
    expect(cpy).to.eql([1, 2, 3, 4,]);
  });
});
