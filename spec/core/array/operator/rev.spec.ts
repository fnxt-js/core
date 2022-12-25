import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {rev} from '../../../../src/array';

describe('rev', () => {
  it('should rev', () => {
    const array: number[] = [1, 2];
    expect(rev(array)).to.eql([2, 1]);
    expect(array).to.eql([1, 2]);
  });

  it('should be self-inverse', () => {
    const array: number[] = [1, 2];
    expect(rev(rev(array))).to.eql(array);
  });

  it('should throw if null or undefined', () => {
    checkThrow(rev);
  });
});
