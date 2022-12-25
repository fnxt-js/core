import * as SEQ from '../../../../src/seq';
import {expect} from 'chai';
import {collect} from '../../../../src/array';

describe('collect', () => {
  it('should collect', () => {
    const array = ['hello', 'world'];
    const fn = collect((e: string) => e.split(''));

    expect(fn(array)).to.eql([
      'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd',
    ]);
  });

  it('should collect iterable', async () => {
    const arr = [1, 2, 3];
    const mapping = (x: number) => SEQ.of(x, x + 1);
    const op = collect(mapping);
    expect(SEQ.toArray(op(arr))).to.eql([1, 2, 2, 3, 3, 4]);
    expect(arr).to.eql([1, 2, 3]);
  });


});
