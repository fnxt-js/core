import {isSome, Option} from '../option';

export const defaultWith = <T>(defThunk: () => T) => (option: Option<T>): T =>
  isSome(option) ? option.value : defThunk();
