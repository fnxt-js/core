import {checkThrow} from '../../../support/checkThrow';
import {expect} from 'chai';
import {splitAt} from '../../../../src/array';

describe('splitAt', () => {
  it('should splitAt', () => {
    const array = [1, 2, 3, 4];
    const fn = splitAt<number>(2);
    expect(fn(array)).to.eql([[1, 2], [3, 4]]);

  });
  it('should splitAt empty', () => {
    const fn = splitAt<number>(2);
    expect(fn([])).to.eql([[], []]);
  });

  it('should splitAt early', () => {
    const fn = splitAt<number>(2);
    expect(fn([1])).to.eql([[1], []]);
  });
  it('should splitAt last', () => {
    const fn = splitAt<number>(2);
    expect(fn([1, 2])).to.eql([[1, 2], []]);
  });

  it('should splitAt 0', () => {
    const array = [1, 2, 3, 4];
    const fn = splitAt<number>(0);
    expect(fn(array)).to.eql([[], [1, 2, 3, 4]]);
  });


  it('should throw if null or undefined', () => {
    const fn = splitAt<number>(2);
    checkThrow(fn);
  });
});
