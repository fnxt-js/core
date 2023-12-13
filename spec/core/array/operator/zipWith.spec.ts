import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {zipWith} from '../../../../src/array';

describe('zipWith', () => {


  it('should zipWith', () => {
    const fn = zipWith((a: number, b: number) => a + b)([1, 2, 3]);
    expect(fn([4, 5, 6])).to.eql([5, 7, 9],);
  });

  it('should zipWith empty', () => {
    const fn = zipWith((a: number, b: number) => a + b)([]);
    expect(fn([])).to.eql([]);
  });
  it('should not zipWith if not same size', () => {
    const fn = zipWith((a: number, b: number) => a + b)([1, 2]);
    expect(() => fn([2])).to.throw();
  });


  it('should throw if null or undefined', () => {
    const fn = zipWith((a: number, b: number) => a + b)([1]);
    checkThrow(fn);
  });
});
