import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {push} from '../../../../src/array';

describe('push', () => {

  it('should push no value', () => {
    expect(push()([])).to.eql([]);
  });

  it('should push one value to empty', () => {
    expect(push(5)([])).to.eql([5]);
  });

  it('should push one value', () => {
    const array = [1, 2, 3, 4];
    expect(push(5)(array)).to.eql([1, 2, 3, 4, 5]);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should push multiple values', () => {
    const array = [1, 2, 3, 4];
    expect(push(5, 6)(array)).to.eql([1, 2, 3, 4, 5, 6]);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should push multiple values to empty', () => {
    expect(push(5, 6)([])).to.eql([5, 6]);
  });

  it('should push no value to array', () => {
    const array = [1, 2, 3, 4];
    expect(push()(array)).to.eql([1, 2, 3, 4]);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should throw if null or undefined', () => {
    const fn = push(2);
    checkThrow(fn);
  });

});
