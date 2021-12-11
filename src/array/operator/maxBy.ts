import {NumberProjection} from 'fnxt/fnxt-types';

export const maxBy = <E>(projection: NumberProjection<E>) => (array: E[]): E | undefined => {
  let maxProjection = -Infinity;
  let maxItem;
  for (const item of array) {
    const p = projection(item);
    if (p > maxProjection) {
      maxProjection = p;
      maxItem = item;
    }
  }
  return maxItem;
};

