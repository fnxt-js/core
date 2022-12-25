import {expect} from 'chai';
import {map} from '../../../../src/array';

describe('map', () => {
  it('should map', () => {
    const array: number[] = [1, 2, 3, 4];
    const fn = map((x: number) => x + 1);
    expect(fn(array)).to.eql([2, 3, 4, 5]);
  });

  it('should map empty', () => {
    const array: number[] = [];
    const fn = map((x: number) => x + 1);
    expect(fn(array)).to.eql([]);
  });
});
