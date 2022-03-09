import {Seq} from 'fnxt/fnxt-types';

export const length = <E>(seq: Seq<E>): number => {
  let count = 0;
  const i = seq[Symbol.iterator]();
  while (!i.next().done) {
    count++;
  }
  return count;

};

