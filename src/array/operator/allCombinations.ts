import {allPairs} from './allPairs';
import {map} from './map';
import {pipe} from 'fnxt/pipe';

export const allCombinations = (...arrays: unknown[][]): unknown[][] => {

    const fn = ([head, ...tail]: unknown[][]): unknown[][] =>
        tail.length
            ? pipe(fn, allPairs(head), map(([h, t]) => [h, ...t]))(tail)
            : head.map(e => [e]);
    return fn(arrays);

};

