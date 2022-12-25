import {expect} from 'chai';
import {skipWhile} from '../../../../src/array';


describe('skipWhile', () => {

  it('should skipWhile', () => {
    const array = [1, 2, 3, 4, 1];
    const fn = skipWhile<number>(x => x < 3);
    expect(fn(array)).to.eql([3, 4, 1]);
  });

  it('should return empty if match', () => {
    const fn = skipWhile<number>(x => x < 3);
    expect(fn([1])).to.eql([]);
  });

  it('should return all if no match', () => {
    const fn = skipWhile<number>(x => x < 3);
    expect(fn([3, 4])).to.eql([3, 4]);
  });

  it('should return empty if empty', () => {
    const fn = skipWhile<number>(x => x < 3);
    expect(fn([])).to.eql([]);
  });

});
