import {isSome, Option} from '../option';
import {Predicate} from 'fnxt/fnxt-types';

export const exists = <T>(predicate: Predicate<T>) => (o: Option<T>): boolean =>
  isSome(o) ? predicate(o.value) : false;
