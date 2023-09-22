import {UnaryFunction} from 'fnxt/fnxt-types';

export const map = <T, R>(mapping: UnaryFunction<T, R>) => (array: T[]): R[] => array.map(mapping);
