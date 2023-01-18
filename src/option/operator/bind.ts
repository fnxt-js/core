import {UnaryFunction} from 'fnxt/fnxt-types';
import {isSome, Option} from '../option';

export const bind = <T, R>(fn: UnaryFunction<T, Option<R>>) => (o: Option<T>): Option<R> =>
  isSome(o) ? fn(o.value) : o;
