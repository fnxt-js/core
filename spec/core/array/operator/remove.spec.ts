import {expect} from 'chai';
import {remove} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('remove', () => {



  it('should remove in middle', () => {
    const array = [1,2,3];
    const fn = remove(1);
    expect(fn(array)).to.eql([1,3]);
    expect(array).to.eql([1,2,3]);
  });

  it('should remove first', () => {
    const array = [1,2,3];
    const fn = remove(0);
    expect(fn(array)).to.eql([2,3]);
    expect(array).to.eql([1,2,3]);
  });

  it('should remove last', () => {
    const array = [1,2,3];
    const fn = remove(2);
    expect(fn(array)).to.eql([1,2]);
    expect(array).to.eql([1,2,3]);
  });

  it('should remove out of bounds', () => {
    const array = [1,2,3];
    const fn = remove(3);
    expect(() => fn(fn(array))).to.throw(`index: (3) out of range`);
  });

  it('should remove negative index', () => {
    const array = [1,2,3];
    const fn = remove(-1);
    expect(() => fn(fn(array))).to.throw(`index: (-1) out of range`);
  });


  it('should throw if null or undefined', () => {
    const fn = remove(2);
    checkThrow(fn);
  });


});
