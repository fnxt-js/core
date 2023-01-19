import {isSome, Option} from '../option';

export const count = <T>(o: Option<T>): number =>
  isSome(o) ? 1 : 0;

