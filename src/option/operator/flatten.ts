import {isSome, None, Option} from '../option';

export const flatten = <T>(o: Option<Option<T>>): Option<T> => isSome(o) ? o.value : None;
