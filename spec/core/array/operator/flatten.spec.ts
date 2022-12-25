import {expect} from 'chai';
import {flatten} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('flatten', () => {
  it('should flatten', () => {
    expect(flatten([[1], [2, 3], [4]])).to.eql([1, 2, 3, 4]);
    expect(flatten([])).to.eql([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(flatten([1] as any)).to.eql([1]);
  });


  it('should throw if null or undefined', () => {
    const fn = (number: number[][]) => flatten<number>(number);
    checkThrow(fn);
  });
});
