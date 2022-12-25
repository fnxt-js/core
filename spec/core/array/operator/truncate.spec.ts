import {expect} from 'chai';
import {truncate} from '../../../../src/array';


describe('truncate', () => {
  it('should truncate', () => {
    const array = [1, 2, 3, 4];
    const fn = truncate(2);
    expect(fn(array)).to.eql([1, 2]);
    expect(array).to.eql([1, 2, 3, 4]);
  });

  it('should return empty if empty', () => {
    const fn = truncate(2);
    expect(fn([])).to.eql([]);
  });

  it('should return all if not enough items', () => {
    const array = [1, 2, 3, 4];
    const fn = truncate(5);
    expect(fn(array)).to.eql(array);
  });

});
