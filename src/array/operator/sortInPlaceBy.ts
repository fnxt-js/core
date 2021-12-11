import {KeyProjection} from 'fnxt/fnxt-types';

export const sortInPlaceBy = <T>(fn: KeyProjection<T>) => (array: T[]): T[] =>
  array.sort((a, b) => fn(a).toString().localeCompare(fn(b).toString()));
