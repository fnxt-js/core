import {genToSeq} from '../build';
import {Seq} from 'fnxt/fnxt-types';

export const empty = <E>():Seq<E> => {
  return genToSeq(function* () {
    // empty
  });
};
