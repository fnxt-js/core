import {expect} from 'chai';
import {chunkBySize} from '../../../../src/array';

import {checkThrow} from '../../../support/checkThrow';

describe('chunkBySize', () => {
  it('should chunkBySize 1', () => {
    const array = [1, 2, 3, 4];
    const fn = chunkBySize(3);
    expect(fn(array)).to.eql([[1, 2, 3], [4]]);
  });
  it('should chunkBySize 2', () => {
    const array = [1, 2, 3, 4];
    const fn = chunkBySize(2);
    expect(fn(array)).to.eql([[1, 2], [3, 4]]);
  });
  it('should chunkBySize 3', () => {
    const array: number[] = [];
    const fn = chunkBySize(2);
    expect(fn(array)).to.eql([]);
  });
  it('should chunkBySize 4', () => {
    const array = [1];
    const fn = chunkBySize(2);
    expect(fn(array)).to.eql([[1]]);
  });


  it('should throw if null or undefined', () => {
    const fn = chunkBySize(2);
    checkThrow(fn);
  });
});
