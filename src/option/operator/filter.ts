import {isSome, None, Option} from '../option';
import {Predicate} from 'fnxt/fnxt-types';

export const filter = <T>(predicate: Predicate<T>) => (option: Option<T>): Option<T> =>
  isSome(option) && predicate(option.value) ? option : None;
