import {expect} from 'chai';
import {pairwiseWith} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('pairwiseWith', () => {
  it('should pairwiseWith', () => {
    const pairwiseSum = pairwiseWith<number>((a:number, b:number) => a + b);
    expect(pairwiseSum([1, 2, 3, 4])).to.eql([3, 5, 7]);
    expect(pairwiseSum([1,2])).to.eql([3]);
    expect(pairwiseSum([1])).to.eql([]);
    expect(pairwiseSum([])).to.eql([]);
  });


  it('should throw if null or undefined', () => {
    checkThrow(pairwiseWith<number>((a, b) => a + b));
  });
});
