import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {fold} from '../../../../src/array';

describe('fold', () => {

  it('should fold string', () => {
    const array = ['1', '2', '3', '4'];
    const fn = fold<string, string>((p, c) => p + c)('');
    expect(fn(array)).to.eql('1234');
  });

  it('should fold numbers', () => {
    const array = [1, 2, 3, 4];
    const fn = fold<number, number>((p, c) => p + c)(5);
    expect(fn(array)).to.eql(15);
  });

  it('should fold empty', () => {
    const array: number[] = [];
    const fn = fold<number, number>((p, c) => p + c)(5);
    expect(fn(array)).to.eql(5);
  });


  it('should throw if null or undefined', () => {
    const fn = fold<number, number>((p, c) => p + c)(5);
    checkThrow(fn);
  });

});
