import {expect} from 'chai';
import {average} from '../../../../src/array';

describe('average', () => {
  it('should average', () => {
    const array = [1, 2, 3, 4,];
    expect(average(array)).to.approximately(2.5, 0.000001);
  });
});
