import {expect} from 'chai';
import {pairwise, windowed} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('pairwise', () => {
  it('should pairwise', () => {
    expect(pairwise([1, 2, 3, 4])).to.eql([[1, 2], [2, 3], [3, 4]]);
    expect(pairwise([1, 2, 3, 4])).to.eql(windowed(2)([1, 2, 3, 4]));
    expect(pairwise([1])).to.eql([]);
    expect(pairwise([])).to.eql([]);
  });


  it('should throw if null or undefined', () => {
    checkThrow(pairwise);
  });
});
