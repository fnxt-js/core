import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {stride} from '../../../../src/array';

describe('stride', () => {

  it('should stride 1', () => {
    const fn = stride(1);
    expect(fn([1, 2, 3, 4, 5, 6])).to.eql([1, 2, 3, 4, 5, 6],);
  });

  it('should stride 2', () => {
    const fn = stride(2);
    expect(fn([1, 2, 3, 4, 5, 6])).to.eql([1, 3, 5],);
  });

  it('should stride 3', () => {
    const fn = stride(3);
    expect(fn([1, 2, 3, 4])).to.eql([1, 4],);
  });

  it('should stride empty', () => {
    const fn = stride(2);
    expect(fn([])).to.eql([]);
  });

  it('should throw if null or undefined', () => {
    const fn = stride(1);
    checkThrow(fn);
  });
});
