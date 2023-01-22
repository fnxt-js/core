import {isNone, Option} from 'fnxt/option';

export const orElse = <T>(alternative: Option<T>) => (option: Option<T>): Option<T> =>
  isNone(option) ? alternative : option;
