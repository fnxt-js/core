import {Dictionary, PropertyProjection} from 'fnxt/fnxt-types';

type Pair<F> = [F, number]

export const countBy = <E, F extends string | number = string | number>(projection: PropertyProjection<E, F>) =>
  (array: E[]): [F, number][] => {
    const dict: Dictionary<Pair<F>> = {};
    for (const e of array) {
      const key = projection(e);
      const [_, v]: Pair<F> = dict[key] || [key, 0];
      dict[key] = [key, v + 1] as Pair<F>;
    }
    return Object.values(dict);
  };

