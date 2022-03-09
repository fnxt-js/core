import {Seq} from 'fnxt/fnxt-types';

export const last = <E>(seq: Seq<E>): E => {
  let e: E | undefined;
  for (const i of seq) {
    e = i;
  }
  if (e === undefined) {
    throw new Error('empty sequence has no last element');
  }
  return e;
};

