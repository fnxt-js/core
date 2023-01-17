import {isSome, None, Option} from '../option';
import {Predicate} from 'fnxt/fnxt-types';

export const filter = <T>(predicate: Predicate<T>) => (o: Option<T>): Option<T> =>
  isSome(o) ? predicate(o.value) ? o : None : o;
