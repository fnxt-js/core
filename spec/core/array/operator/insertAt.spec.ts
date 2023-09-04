import {expect} from 'chai';
import {insertAt} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('insertAt', () => {


  it('should replace', () => {
    const array = [1];
    const fn = insertAt(0)(42);
    expect(fn(array)).to.eql([42,1]);
    expect(array).to.eql([1]);
  });

  it('should append', () => {
    const array = [1];
    const fn = insertAt(1)(42);
    expect(fn(array)).to.eql([1,42])
    expect(array).to.eql([1]);
  });

  it('should not append', () => {
    const array = [1];
    const fn = insertAt(2)(42);
    expect(()=>fn(array)).to.throws(`index: (2) out of range`);
    expect(array).to.eql([1]);
  });

  it('should replace in middle', () => {
    const array = [1,2];
    const fn = insertAt(1)(42);
    expect(fn(array)).to.eql([1,42,2]);
    expect(array).to.eql([1,2]);
  });

  it('should replace first', () => {
    const array = [1,2];
    const fn = insertAt(0)(42);
    expect(fn(array)).to.eql([42,1,2]);
    expect(array).to.eql([1,2]);
  });

  it('should append last', () => {
    const array = [1,2];
    const fn = insertAt(2)(42);
    expect(fn(array)).to.eql([1,2,42]);
    expect(array).to.eql([1,2]);
  });


  it('should throw if null or undefined', () => {
    const fn = insertAt(2)(42);
    checkThrow(fn);
  });


});
