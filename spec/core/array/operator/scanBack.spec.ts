import {scanBack} from '../../../../src/array';
import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';

describe('scanBack', () => {
  it('should scanBack', () => {
    const array = [1, 2, 3, 4];
    const fn = scanBack<number, number>((p, c) => p + c)(0);
    expect(fn(array)).to.eql([10, 9, 7, 4, 0]);
  });

  it('should throw if null or undefined', () => {
    const fn = scanBack<number, number>((p, c) => p + c)(0);
    checkThrow(fn);
  });
});
