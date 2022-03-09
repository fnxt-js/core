import {Option, OptionType, Some} from '../option';
import {UnaryFunction} from 'fnxt/fnxt-types';


export const map = <T, R>(fn: UnaryFunction<T, R>) => (o: Option<T>): Option<R> => {
  switch (o.type) {
    case OptionType.None:
      return o;
    case OptionType.Some:
      return Some(fn(o.value));
  }
};
