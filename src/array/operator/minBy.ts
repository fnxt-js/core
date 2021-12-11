import {NumberProjection} from 'fnxt/fnxt-types';

export const minBy = <E>(projection: NumberProjection<E>) => (array: E[]): E | undefined => {
  let minProjection = Infinity;
  let minItem;
  for (const item of array) {
    const p = projection(item);
    if (p < minProjection) {
      minProjection = p;
      minItem = item;
    }
  }
  return minItem;
};
