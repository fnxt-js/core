import {expect} from 'chai';
import {filter} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('filter', () => {

  it('should filter array', () => {
    const array = [1, 2, 3, 4];
    const fn = filter((x: number) => x % 2 != 0);
    expect(fn(array)).to.eql([1, 3]);

  });

  it('should filter empty', () => {
    const fn = filter((x: number) => x % 2 != 0);
    expect(fn([])).to.eql([]);
  });

  it('should throw if null or undefined', () => {
    const fn = filter((x: number) => x % 2 != 0);
    checkThrow(fn);
  });
});
