import {Seq} from 'fnxt/fnxt-types';

export const toArray = <E>(seq: Seq<E>): E[] => [...seq];
