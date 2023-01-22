import {isNone, Option} from 'fnxt/option';
import {Thunk} from 'fnxt/fnxt-types';

export const orElseWith = <T>(alternative: Thunk<Option<T>>) => (option: Option<T>): Option<T> =>
  isNone(option) ? alternative() : option;
