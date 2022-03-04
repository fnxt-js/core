import {toSequence} from '../build';
import {Seq} from 'fnxt/fnxt-types';


export const chunkBySize = <E>(count: number) => (seq1: Seq<E>): Seq<E[]> =>
  toSequence(function* () {
    if (count <= 0) {
      throw new Error('count must be greater then 0');
    }
    let arr = [];
    for (const e of seq1) {
      arr.push(e);
      if (arr.length + 1 > count) { // +1 > to handle decimals
        yield arr;
        arr = [];
      }
    }
    if (arr.length) {
      yield arr;
    }
  });

