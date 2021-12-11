import {collect} from './collect';
import {Tuple} from 'fnxt/fnxt-types';

export const allPairs = <E>(a: E[]) => <F>(b: F[]): Tuple<E, F>[] =>
  collect<E, Tuple<E, F>>((e: E) => b.map((f: F) => [e, f]))(a);
