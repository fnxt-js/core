import {expect} from 'chai';

import {checkThrow} from '../../../support/checkThrow';
import {init} from '../../../../src/array';

describe('init', () => {
  it('should init', () => {
    const array = [1, 2, 3, 4];
    expect(init(array)).to.eql([1, 2, 3]);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should return empty array if length is 1', () => {
    expect(init([1])).to.eql([]);
  });
  it('should return one element in array if length is 2', () => {
    expect(init([1,2])).to.eql([1]);
  });
  it('should throw if empty', () => {
    expect(() => init([])).to.throw();
  });
  it('should throw if null or undefined', () => {
    checkThrow(init);
  });
});
