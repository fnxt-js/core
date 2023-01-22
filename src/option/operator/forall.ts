import {Predicate} from 'fnxt/fnxt-types';
import {isSome, Option} from 'fnxt/option';

export const forall = <T>(predicate: Predicate<T>) => (option: Option<T>) =>
  isSome(option) ? predicate(option.value) : true;
