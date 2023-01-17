import {UnaryFunction} from 'fnxt/fnxt-types';
import {isNone, Option} from '../option';

export const bind = <T, R>(fn: UnaryFunction<T, Option<R>>) => (o: Option<T>): Option<R> =>
  isNone(o) ? o : fn(o.value);
