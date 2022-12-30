import {expect} from 'chai';
import {None, Some} from '../../../../src/option';
import {tryFindBack} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('tryFindBack', () => {

  it('should tryFindBack', () => {
    const array: number[] = [1, 2, 3, 4];
    const fn = tryFindBack<number>((x: number) => x >= 3);
    expect(fn(array)).to.eql(Some(4));
  });

  it('should tryFindBack', () => {
    const array: number[] = [1, 2, 3, 4];
    const fn = tryFindBack<number>((x: number) => x % 2 == 1);
    expect(fn(array)).to.eql(Some(3));
  });


  it('should not tryFindBack', () => {
    const array: number[] = [1, 2, 3, 4];
    const fn = tryFindBack<number>((x: number) => x > 4);
    expect(fn(array)).to.eql(None);
  });

  it('should not tryFindBack if empty', () => {
    const fn = tryFindBack<number>((x: number) => x > 4);
    expect(fn([])).to.eql(None);
  });

  it('should throw if null or undefined', () => {
    const fn = tryFindBack<number>((x) => x > 4);
    checkThrow(fn);
  });
});
