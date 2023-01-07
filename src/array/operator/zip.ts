import {Tuple} from 'fnxt/fnxt-types';

export const zip = <E>(arr1: E[]) => <F>(arr2: F[]): Array<Tuple<E, F>> => {
  if (arr1.length !== arr2.length) {
    throw new Error('Input arrays must have equal lengths');
  }
  const result: Array<Tuple<E, F>> = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
};
