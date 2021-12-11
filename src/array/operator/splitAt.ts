import {Tuple} from 'fnxt/fnxt-types';

export const splitAt = <T>(index: number) => (array: T[]): Tuple<T[], T[]> => {
  if (array.length <= index) {
    return [array, []];
  }
  const a = [];
  const b = [];
  for (let i = 0; i < index; i++) {
    a.push(array[i]);
  }
  for (let i = index; i < array.length; i++) {
    b.push(array[i]);
  }
  return [a, b];

};
