import {expect} from 'chai';
import {groupBy} from '../../../../src/array';
import {checkThrow} from '../../../support/checkThrow';

describe('groupBy', () => {
  it('should groupBy', () => {
    const array = [1, 2, 3, 4];
    const fn = groupBy<number>(x => x % 3);
    expect(fn(array)).to.eql([[3], [1, 4], [2],]);
  });
  it('should groupBy empty', () => {
    const fn = groupBy<number>(x => x % 3);
    expect(fn([])).to.eql([]);
  });

  it('should throw if null or undefined', () => {
    const fn = groupBy<number>(x => x % 3);
    checkThrow(fn);
  });
});
