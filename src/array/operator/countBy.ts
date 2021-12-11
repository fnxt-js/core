import {Dictionary, KeyProjection} from 'fnxt/fnxt-types';

export const countBy = <E>(projection: KeyProjection<E>) => (array: E[]): [string, number][] => {
  const set:Dictionary<number> = {};
  for (const e of array) {
    set[projection(e)] = (set[projection(e)] || 0) + 1;
  }
  return Object.entries(set);

};

