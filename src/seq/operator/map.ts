import {Seq, UnaryFunction} from 'fnxt/fnxt-types';
import {generator} from '../build';

export const map = <E, F>(mapping: UnaryFunction<E, F>) =>
  (seq: Seq<E>): Seq<F> =>
    generator(function* () {
      for (const e of seq) yield mapping(e);
    });


