import {Chooser, OptionType} from 'fnxt/option';
import {Seq} from 'fnxt/fnxt-types';
import {generator} from '../build';

export const choose = <E, F>(chooser: Chooser<E, F>) => (seq: Seq<E>): Seq<F> =>
  generator(function* () {
    for (const e of seq) {
      const option = chooser(e);
      if (option.type === OptionType.Some) yield option.value;

    }
  });

