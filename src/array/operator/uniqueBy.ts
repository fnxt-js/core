import {Dictionary, KeyProjection} from 'fnxt/fnxt-types';

export const uniqueBy = <E>(projection: KeyProjection<E>) => (array: E[]): E[] => {
  const map: Dictionary<boolean> = {};
  const result: E[] = [];
  for (const e of array) {
    const key = projection(e);
    if (!map[key]) {
      map[key] = true;
      result.push(e);
    }
  }
  return result;
};

