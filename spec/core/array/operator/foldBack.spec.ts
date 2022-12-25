import {expect} from 'chai';
import {foldBack} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('foldBack', () => {
  it('should foldBack', () => {
    const array = [1, 2, 3, 4];
    const fn = foldBack<number, string>((p, c) => p + c)('');
    expect(fn(array)).to.eql('4321');
  });


  it('should foldBack empty', () => {
    const array: number[] = [];
    const fn = foldBack<number, number>((p, c) => p + c)(5);
    expect(fn(array)).to.eql(5);
  });

  it('should throw if null or undefined', () => {
    const fn = foldBack<number, string>((p, c) => p + c)('');
    checkThrow(fn);
  });
});
