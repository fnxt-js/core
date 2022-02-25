import {Seq} from 'fnxt/fnxt-types';
import {generator} from '../build';

export const concat = <E>(seq1: Seq<E>) => (seq2: Seq<E>): Seq<E> =>
  generator(function* () {
    for (const e of seq1) yield e;
    for (const e of seq2) yield e;
  });


