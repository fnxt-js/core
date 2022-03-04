import {Seq, UnaryFunction} from 'fnxt/fnxt-types';
import {toSequence} from '../build';

export const filter = <E>(mapping: UnaryFunction<E, boolean>) =>
  (seq: Seq<E>): Seq<E> =>
    toSequence(function* () {
      for (const e of seq) if (mapping(e)) yield e;
    });


