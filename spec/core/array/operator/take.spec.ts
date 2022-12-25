import {expect} from 'chai';

import {checkThrow} from '../../../support/checkThrow';
import {take} from '../../../../src/array';

describe('take', () => {
  it('should take', () => {
    const array = [1, 2, 3, 4];
    const fn = take(2);
    expect(fn(array)).to.eql([1, 2]);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should throw if not enough items', () => {
    const fn = take(2);
    expect(() => fn([1])).to.throw();
  });
  it('should throw if empty', () => {
    const fn = take(2);
    expect(() => fn([])).to.throw();
  });
  it('should throw if null or undefined', () => {
    const fn = take(2);
    checkThrow(fn);
  });
});
