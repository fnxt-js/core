import {Seq} from 'fnxt/fnxt-types';
import {toSequence} from '../build';


export const of = <E>(...values: E[]): Seq<E> =>
  toSequence(function* () {
    for (const value of values) {
      yield value;
    }
  });


