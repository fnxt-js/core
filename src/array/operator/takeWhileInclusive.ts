import {Predicate} from 'fnxt/fnxt-types';

export const takeWhileInclusive = <T>(predicate: Predicate<T>) => (array: T[]): T[] => {
    const result = [];
    for (const element of array) {
        result.push(element);
        if (!predicate(element)) {
            break;
        }
    }
    return result;
};


