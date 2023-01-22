import {Folder} from 'fnxt/fnxt-types';
import {isSome, Option} from 'fnxt/option';

export const fold = <T, S>(folder: Folder<T, S>) => (state: S) => (option: Option<T>): S =>
  isSome(option) ? folder(state, option.value) : state;

