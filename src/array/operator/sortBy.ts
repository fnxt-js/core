import {KeyProjection} from '../../types/types';

export const sortBy = <T>(fn: KeyProjection<T>) => (array: T[]): T[] =>
  array.map(e => [fn(e), e]).sort().map(e => e[1]) as T[];

