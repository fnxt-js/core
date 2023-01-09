import {checkThrow} from '../../../support/checkThrow';
import {expect} from 'chai';
import {rotateBack} from '../../../../src/array';

describe('rotateBack', () => {
  it('should rotateBack', () => {
    const array = [1, 2, 3, 4, 5];
    const fn = rotateBack(2);
    expect(fn(array)).to.eql([4, 5, 1, 2, 3,]);
  });

  it('should rotateBack modulo', () => {
    const array = [1, 2, 3, 4, 5];
    expect(rotateBack(6)(array)).to.eql(rotateBack(6 % array.length)(array));

  });

  it('should rotateBack empty', () => {
    const fn = rotateBack(2);
    expect(fn([])).to.eql([]);
  });

  it('should rotateBack early', () => {
    const fn = rotateBack(2);
    expect(fn([1])).to.eql([1,]);
  });
  it('should rotateBack last', () => {
    const fn = rotateBack(2);
    expect(fn([1, 2])).to.eql([1, 2,]);
  });

  it('should rotateBack 0', () => {
    const array = [1, 2, 3, 4];
    const fn = rotateBack(0);
    expect(fn(array)).to.eql([1, 2, 3, 4]);
  });


  it('should throw if null or undefined', () => {
    const fn = rotateBack(2);
    checkThrow(fn);
  });
});
