import {expect} from 'chai';

import {checkThrow} from '../../../support/checkThrow';
import {windowed} from '../../../../src/array';

describe('windowed', () => {

  it('should windowed', () => {
    const array = [1, 2, 3, 4];
    const fn = windowed(2);
    expect(fn(array)).to.eql([[1, 2], [2, 3], [3, 4]]);
    expect(fn([1, 2])).to.eql([[1, 2]]);
    expect(fn([1])).to.eql([]);
  });

  it('should return empty if window greater than length', () => {
    const fn = windowed(2);
    expect(fn([1])).to.eql([]);
  });

  it('should throw if windowSize is less than 1', () => {
    expect(() => windowed(0)).to.throw(`windowSize must not be less than 1. (0 given)`);
    expect(() => windowed(-1)).to.throw(`windowSize must not be less than 1. (-1 given)`);
  });


  it('should return empty', () => {
    const fn = windowed(2);
    expect(fn([])).to.eql([]);
  });

  it('should throw if null or undefined', () => {
    const fn = windowed(2);
    checkThrow(fn);
  });
});
