import {isNone, Option} from '../option';

export const defaultValue = <T>(value: T) => (o: Option<T>): T =>
  isNone(o) ? value : o.value;

