import {Folder} from 'fnxt/fnxt-types';
import {isSome, Option} from 'fnxt/option';

export const foldBack = <T, S>(predicate: Folder<T, S>) => (option: Option<T>) => (state: S): S =>
  isSome(option) ? predicate(state, option.value) : state;
