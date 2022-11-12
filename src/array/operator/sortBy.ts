import {KeyProjection} from 'fnxt/fnxt-types';

/**
 * @deprecated use sortWith
 * @param fn
 */
export const sortBy = <T>(fn: KeyProjection<T>) => (array: T[]): T[] => {
  const tuples = array.map(e => [fn(e), e]);
  return (tuples
    // @ts-ignore
    .sort((tuples[0] && typeof tuples[0][0] === 'number')
      ? ((a: [number, T], b: [number, T]) => a[0] - b[0])
      : ((a: [string, T], b: [string, T]) => a[0].localeCompare(b[0]))
    ) as [number, T][] | [string, T][])
    .map((e: [number | string, T]) => e[1]) as T[];
};


