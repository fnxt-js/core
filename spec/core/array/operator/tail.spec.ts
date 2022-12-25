import {tail} from '../../../../src/array';
import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';

describe('tail', () => {


  it('should tail', () => {
    const array = [1, 2, 3, 4];
    expect(tail(array)).to.eql([2, 3, 4]);
  });

  it('should empty tail', () => {
    const array = [1];
    expect(tail(array)).to.eql([]);
  });

  it('should throw if array is empty', () => {
    expect(() => tail([])).to.throw();
  });


  it('should throw if null or undefined', () => {
    checkThrow(tail);
  });

});
