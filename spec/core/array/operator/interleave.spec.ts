import {expect} from 'chai';
import {checkThrow} from '../../../support/checkThrow';
import {allCombinations, interleave, range} from '../../../../src/array';

describe('interleave', () => {


  it('should interleave', () => {
    const fn = interleave([1, 2, 3]);
    expect(fn([4, 5, 6])).to.eql([1, 4, 2, 5, 3, 6],);
  });

  it('should interleave empty', () => {
    const fn = interleave([]);
    expect(fn([])).to.eql([]);
  });
  it('should not interleave if not same size', () => {
    const fn = interleave([1, 2]);
    expect(() => fn([2])).to.throw();
  });


  it('should throw if null or undefined', () => {
    const fn = interleave([1]);
    checkThrow(fn);
  });



  it('should throw if null or undefined', () => {

    console.log(allCombinations(range(1,14),range(1,5)));
  });
});
