import {expect} from 'chai';
import {exists} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';


describe('exists', () => {
  it('should exists', () => {
    const array: number[] = [1, 2, 3, 4];
    const fn = exists<number>((x: number) => x > 3);
    expect(fn(array)).to.eql(true);
  });
  it('should not exists', () => {
    const array: number[] = [1, 2, 3, 4];
    const fn = exists<number>((x: number) => x > 4);
    expect(fn(array)).to.eql(false);
  });

  it('should not exists if empty', () => {
    const fn = exists<number>((x: number) => x > 4);
    expect(fn([])).to.eql(false);
  });

  it('should throw if null or undefined', () => {
    const fn = exists<number>((x: number) => x > 4);
    checkThrow(fn);
  });
});
