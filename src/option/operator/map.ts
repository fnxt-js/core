import {isSome, Option, Some} from '../option';
import {UnaryFunction} from 'fnxt/fnxt-types';


export const map = <T, R>(fn: UnaryFunction<T, R>) => (o: Option<T>): Option<R> =>
  isSome(o) ? Some(fn(o.value)) : o;
