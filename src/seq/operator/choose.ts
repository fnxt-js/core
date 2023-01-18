import {Chooser, isSome} from 'fnxt/option';
import {Seq} from 'fnxt/fnxt-types';
import {toSequence} from '../build';

export type chooseT = <E, F>(e: Chooser<E, F>) => (seq: Seq<E>) => Seq<F>

export const choose: chooseT = <E, F>(chooser: Chooser<E, F>) => (seq: Seq<E>): Seq<F> =>
  toSequence(function* () {
    for (const e of seq) {
      const option = chooser(e);
      if (isSome(option)) {
        yield option.value;
      }
    }
  });

