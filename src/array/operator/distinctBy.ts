import {Dictionary, KeyProjection} from 'fnxt/fnxt-types';

export const distinctBy = <E>(projection: KeyProjection<E>) => (array: E[]): E[] => {
  const set:Dictionary<E> = {};
  for (const e of array) {
    const key = projection(e);
    if (set[key] === undefined) {
      set[key] = e;
    }
  }
  return Object.values(set);

};

