
import {map} from './map';
import {pipe} from 'fnxt/pipe';
import {Seq, Tuple, UnaryFunction} from 'fnxt/fnxt-types';
import {reduce} from './reduce';

type T<E> = Tuple<E, number>
const first = <E>(v: [E, unknown]): E => v[0];


export const minBy = <E>(mapping: UnaryFunction<E, number>): UnaryFunction<Seq<E>, E> =>
    pipe(
        map<E, T<E>>(e => [e, mapping(e)]),
        reduce<T<E>>((p: T<E>, c: T<E>) => p[1] < c[1] ? p : c),
        first
    );


