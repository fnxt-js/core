import {UnaryFunction} from 'fnxt/fnxt-types';
import {isSome, None, Option} from '../option';

export const bind = <T, R>(fn: UnaryFunction<T, Option<R>>) => (option: Option<T>) =>
  isSome(option) ? fn(option.value) : None;

