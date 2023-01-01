import {range} from 'fnxt/array';

export const zip3 = <T>(a: T[]) => <U>(b: U[]) => <S>(c: S[]): [T, U, S][] => {
    if (a.length !== b.length || c.length !== a.length) {
        throw Error('arrays differ in length');
    }
    return range(0,a.length).map((v, i) => [a[i], b[i], c[i]]);
};
