import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {zip} from '../../../../src/array';

describe('zip', () => {


  it('should zip', () => {
    const fn = zip([1, 2, 3]);
    expect(fn([4, 5, 6])).to.eql([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });

  it('should zip empty', () => {
    const fn = zip([]);
    expect(fn([])).to.eql([]);
  });
  it('should not zip if not same size', () => {
    const fn = zip([1, 2]);
    expect(() => fn([2])).to.throw();
  });


  it('should throw if null or undefined', () => {
    const fn = zip([1]);
    checkThrow(fn);
  });
});
