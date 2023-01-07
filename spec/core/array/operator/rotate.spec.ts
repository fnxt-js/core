import {checkThrow} from '../../../support/checkThrow';
import {expect} from 'chai';
import {rotate} from '../../../../src/array';

describe('rotate', () => {
  it('should rotate', () => {
    const array = [1, 2, 3, 4, 5];
    const fn = rotate(2);
    expect(fn(array)).to.eql([3, 4, 5, 1, 2,]);

  });

  it('should rotate modulo', () => {
    const array = [1, 2, 3, 4, 5];
    expect(rotate(6)(array)).to.eql(rotate(6%array.length)(array));

  });

  it('should rotate empty', () => {
    const fn = rotate(2);
    expect(fn([])).to.eql([]);
  });

  it('should rotate early', () => {
    const fn = rotate(2);
    expect(fn([1])).to.eql([1,]);
  });
  it('should rotate last', () => {
    const fn = rotate(2);
    expect(fn([1, 2])).to.eql([1, 2,]);
  });

  it('should rotate 0', () => {
    const array = [1, 2, 3, 4];
    const fn = rotate(0);
    expect(fn(array)).to.eql([1, 2, 3, 4]);
  });


  it('should throw if null or undefined', () => {
    const fn = rotate(2);
    checkThrow(fn);
  });
});
