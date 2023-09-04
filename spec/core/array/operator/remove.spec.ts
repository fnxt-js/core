import {expect} from 'chai';
import {sortWith, remove} from '../../../../src/array';
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


  it('should throw if null or undefined', () => {
    const fn = sortWith<string>((a, b) => a.length - b.length);
    checkThrow(fn);
  });


});
