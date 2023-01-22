import {isSome, Option} from '../option';

export const count = <T>(option: Option<T>): number => isSome(option) ? 1 : 0;

