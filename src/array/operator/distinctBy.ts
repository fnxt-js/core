import {KeyProjection} from '../../types/types';

export const distinctBy = <E>(projection: KeyProjection<E>) => (array: E[]): E[] => {
  const set = {};
  for (const e of array) {
    const key = projection(e);
    if (set[key] === undefined) {
      set[key] = e;
    }
  }
  return Object.values(set);

};

