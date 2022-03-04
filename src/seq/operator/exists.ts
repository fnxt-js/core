import {Predicate, Seq} from 'fnxt/fnxt-types';
import {some} from 'fnxt/seq';

export const exists = <T>(fn: Predicate<T>): (seq: Seq<T>) => boolean => some(fn);

