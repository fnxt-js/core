import {Tuple} from '../../types/types';

export const zip = <T>(a: T[]) => <U>(b: U[]): Tuple<T, U>[] => {
    if (a.length != b.length) throw Error('arrays differ in length');
    return new Array(a.length).fill(0).map((v, i) => [a[i], b[i]]);
};
