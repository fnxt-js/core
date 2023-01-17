import {isSome, Option} from '../option';

export const defaultWith = <T>(defThunk: () => T) => (o: Option<T>): T =>
  isSome(o) ? o.value : defThunk();

