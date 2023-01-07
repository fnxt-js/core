import {expect} from 'chai';
import {allPairs} from '../../../../src/array';
import {Tuple} from 'fnxt/fnxt-types';

describe('allPairs', () => {
  it('should allPairs', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const fn = allPairs(array1);

    expect(fn(array2)).to.eql([
      [1, 4], [1, 5], [1, 6],
      [2, 4], [2, 5], [2, 6],
      [3, 4], [3, 5], [3, 6],
    ]);
  });


  it('should allPairs different types', () => {
    const array1 = [1, 2, 3];
    const array2 = ['a', 'b', 'c'];
    const fn = allPairs(array1);

    const f: Tuple<number, string>[] = fn(array2);

    expect(f).to.eql([
      [1, 'a'], [1, 'b'], [1, 'c'],
      [2, 'a'], [2, 'b'], [2, 'c'],
      [3, 'a'], [3, 'b'], [3, 'c'],
    ]);
  });
});
