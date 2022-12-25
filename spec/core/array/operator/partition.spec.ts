import {expect} from 'chai';
import {partition} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('partition', () => {
  it('should partition array', () => {
    const array = [1, 2, 3, 4];
    const fn = partition((x: number) => x % 2 != 0);
    expect(fn(array)).to.eql([[1, 3], [2, 4]]);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should partition empty', () => {
    const array: number[] = [];
    const fn = partition((x: number) => x % 2 != 0);
    expect(fn(array)).to.eql([[], []]);
  });

  it('should partition all match', () => {
    const fn = partition((x: number) => x % 2 != 0);
    expect(fn([1, 3])).to.eql([[1, 3], []]);
  });

  it('should partition no match', () => {
    const fn = partition((x: number) => x % 2 == 0);
    expect(fn([1, 3])).to.eql([[], [1, 3]]);
  });


  it('should throw if null or undefined', () => {
    const fn = partition((x: number) => x % 2 != 0);
    checkThrow(fn);
  });

});
