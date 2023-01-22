import {isSome, Option} from '../option';
import {Predicate} from 'fnxt/fnxt-types';

export const exists = <T>(predicate: Predicate<T>) => (option: Option<T>) =>
  isSome(option) ? predicate(option.value) : false;
