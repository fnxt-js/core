import {Seq} from 'fnxt/fnxt-types';

export const isEmpty = <T>(seq: Seq<T>): boolean => seq[Symbol.iterator]().next().done || false;

