import {isNone, Option} from '../option';

export const count = <T>(o: Option<T>): number =>
  isNone(o) ? 0 : 1;

