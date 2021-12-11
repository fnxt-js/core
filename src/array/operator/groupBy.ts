import {Dictionary, KeyProjection} from 'fnxt/fnxt-types';

export const groupBy = <E>(mapping: KeyProjection<E>) => (array: E[]): E[][] => {

  const map: Dictionary<E[]> = {};
  for (const element of array) {
    const key = mapping(element);
    let list = map[key];
    if (!list) {
      list = [];
      map[key] = list;
    }
    list.push(element);
  }
  return Object.values(map);

};

