import {isSome, None, Option} from '../option';

export const flatten = <T>(option: Option<Option<T>>): Option<T> => isSome(option) ? option.value : None;
