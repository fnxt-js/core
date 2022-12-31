import {expect} from 'chai';
import {sortWith, updateAt} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('updateAt', () => {


  it('should replace', () => {
    const array = [1];
    const fn = updateAt(0)(42);
    expect(fn(array)).to.eql([42]);
    expect(array).to.eql([1]);
  });

  it('should not append', () => {
    const array = [1];
    const fn = updateAt(1)(42);
    expect(()=>fn(array)).to.throws(`index: (1) out of range`);
    expect(array).to.eql([1]);
  });

  it('should replace in middle', () => {
    const array = [1,2,3];
    const fn = updateAt(1)(42);
    expect(fn(array)).to.eql([1,42,3]);
    expect(array).to.eql([1,2,3]);
  });

  it('should replace first', () => {
    const array = [1,2,3];
    const fn = updateAt(0)(42);
    expect(fn(array)).to.eql([42,2,3]);
    expect(array).to.eql([1,2,3]);
  });

  it('should replace last', () => {
    const array = [1,2,3];
    const fn = updateAt(2)(42);
    expect(fn(array)).to.eql([1,2,42]);
    expect(array).to.eql([1,2,3]);
  });


  it('should throw if null or undefined', () => {
    const fn = sortWith<string>((a, b) => a.length - b.length);
    checkThrow(fn);
  });


});
