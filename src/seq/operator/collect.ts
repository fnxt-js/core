import {Seq, UnaryFunction} from 'fnxt/fnxt-types';
import {toSequence} from '../build';


export const collect = <E, F>(mapping: UnaryFunction<E, Iterable<F>>) => (seq: Seq<E>): Seq<F> =>
  toSequence(function* () {
    for (const e of seq) {
      for (const f of mapping(e)) {
        yield f;
      }
    }
  });

