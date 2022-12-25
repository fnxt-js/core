import {expect} from 'chai';
import {None, Some} from '../../../../src/option';
import {tryFind} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('tryFind', () => {

  it('should tryFind', () => {
    const array: number[] = [1, 2, 3, 4];
    const fn = tryFind<number>((x: number) => x >= 3);
    expect(fn(array)).to.eql(Some(3));
  });


  it('should not tryFind', () => {
    const array: number[] = [1, 2, 3, 4];
    const fn = tryFind<number>((x: number) => x > 4);
    expect(fn(array)).to.eql(None);
  });

  it('should not tryFind if empty', () => {
    const fn = tryFind<number>((x: number) => x > 4);
    expect(fn([])).to.eql(None);
  });

  it('should throw if null or undefined', () => {
    const fn = tryFind<number>((x) => x > 4);
    checkThrow(fn);
  });
});
