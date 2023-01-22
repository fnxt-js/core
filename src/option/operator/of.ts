import {MaybeNullish} from 'fnxt/fnxt-types';
import {None, Option, Some} from 'fnxt/option';

export const of = <T>(value: MaybeNullish<T>): Option<T> => {
  return value == null ? None : Some(value);
};
