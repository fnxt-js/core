import {isSome, None, Option, Some} from '../option';
import {UnaryFunction} from 'fnxt/fnxt-types';

export const map = <T, R>(fn: UnaryFunction<T, R>) => (option: Option<T>): Option<R> =>
   isSome(option) ? Some(fn(option.value)) : None;

