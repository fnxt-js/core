import {checkThrow} from '../../../support/checkThrow';
import {expect} from 'chai';
import {rotate, rotateBack} from '../../../../src/array';

describe('rotate', () => {
  it('should rotate', () => {
    const array = [1, 2, 3, 4, 5];
    const fn = rotate(2);
    expect(fn(array)).to.eql([3, 4, 5, 1, 2,]);
  });
  it('should rotate negative', () => {
    const array = [1, 2, 3, 4, 5];
    const fn = rotate(-2);
    expect(fn(array)).to.eql([4, 5, 1, 2, 3,]);
  });
  it('should rotate negative twice', () => {
    const array = [1, 2, 3, 4, 5];
    expect(rotate(-2)(array)).to.eql(rotate(-12)(array));
  });
  it('should rotate another test case', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    expect(rotate(-2)(array)).to.eql([6, 7, 1, 2, 3, 4, 5,]);
    expect(rotate(2)(array)).to.eql([3, 4, 5, 6, 7, 1, 2,]);
  });
  it('should rotate mod length', () => {
    const array = [1, 2, 3, 4, 5];
    const offset = Math.floor(Math.random() * array.length);
    const n = Math.round(Math.random() * 10) - 5;
    const fn = rotate(offset);
    expect(fn(array)).to.eql(rotate(offset + array.length)(array));
    expect(fn(array)).to.eql(rotate(offset - array.length)(array));
    expect(fn(array)).to.eql(rotate(offset + array.length * n)(array));
  });

  it('should rotate negative', () => {
    const array = [1, 2, 3, 4, 5];
    expect(rotate(-2)(array)).to.eql(rotateBack(2)(array));
  });

  it('should rotate modulo', () => {
    const array = [1, 2, 3, 4, 5];
    expect(rotate(6)(array)).to.eql(rotate(6 % array.length)(array));

  });

  it('should rotate empty', () => {
    const fn = rotate(2);
    expect(fn([])).to.eql([]);
  });

  it('should rotate early', () => {
    const fn = rotate(2);
    expect(fn([1])).to.eql([1]);
  });
  it('should rotate last', () => {
    const fn = rotate(2);
    expect(fn([1, 2])).to.eql([1, 2]);
  });

  it('should rotate 0', () => {
    const array = [1, 2, 3, 4];
    const fn = rotate(0);
    expect(fn(array)).to.eql([1, 2, 3, 4]);
  });


  it('should throw if null or undefined', () => {
    const fn = rotate(2);
    checkThrow(fn);
  });
});
