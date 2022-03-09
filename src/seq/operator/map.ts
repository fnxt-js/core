import {Seq, UnaryFunction} from 'fnxt/fnxt-types';
import {toSequence} from '../build';


export const map = <E, F>(mapping: UnaryFunction<E, F>) =>
  (seq: Seq<E>): Seq<F> =>
    toSequence(function* () {
      for (const e of seq) {
        yield mapping(e);
      }
    });


