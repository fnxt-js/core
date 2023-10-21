import {expect} from 'chai';

import {checkThrow} from '../../../support/checkThrow';
import {chunkBySize, kernel, range, windowed} from '../../../../src/array';

describe('kernel', () => {

  it('should kernel 1:2', () => {
    const array = [1, 2, 3, 4];
    const fn = kernel(2)(2);
    expect(fn(array)).to.eql([[1, 2], [3, 4]]);
    expect(fn([1, 2])).to.eql([[1, 2]]);
    expect(fn([1])).to.eql([]);
  });
  it('should kernel 2:3', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const fn = kernel(2)(3);
    expect(fn(array)).to.eql([[1, 2, 3], [3, 4, 5], [5, 6, 7]]);
    expect(fn([1, 2, 3])).to.eql([[1, 2, 3]]);
    expect(fn([1, 2])).to.eql([]);
    expect(fn([1])).to.eql([]);
  });
  describe('iterate', () => {
    for (let i = 1; i < 50; i += Math.ceil(Math.random() * 5)) {

      it(`should kernel 1:${i} equals windowed ${i}`, () => {
        const array = range(0, 100);
        const fn = kernel(1)(i);
        expect(fn(array)).to.eql(windowed(i)(array));
      });
      it(`should kernel ${i}:${i} equals chunkBySize ${i} if array length is multiple of ${i}`, () => {
        const array = range(0, Math.floor(100 / i) * i);
        const fn = kernel(i)(i);
        expect(fn(array)).to.eql(chunkBySize(i)(array));
      });
    }
  });

  it('should return empty if window greater than length', () => {
    const fn = kernel(1)(2);
    expect(fn([1])).to.eql([]);
  });

  it('should throw if windowSize is less than 1', () => {
    expect(() => kernel(1)(0)).to.throw(`windowSize must not be less than 1. (0 given)`);
    expect(() => kernel(1)(-1)).to.throw(`windowSize must not be less than 1. (-1 given)`);
  });
  it('should throw if stride is less than 1', () => {
    expect(() => kernel(0)(1)).to.throw(`stride must not be less than 1. (0 given)`);
    expect(() => kernel(-1)(1)).to.throw(`stride must not be less than 1. (-1 given)`);
  });


  it('should return empty', () => {
    const fn = kernel(1)(2);
    expect(fn([])).to.eql([]);
  });

  it('should throw if null or undefined', () => {
    const fn = kernel(1)(2);
    checkThrow(fn);
  });
});
