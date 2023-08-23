import {UnaryFunction} from 'fnxt/fnxt-types';
import {map} from 'fnxt/result';
import {Aff, of, run} from '../effect';

export const mapAff = <T, R>(fn: UnaryFunction<T, R>) =>
    <Err>(aff: Aff<T, Err>): Aff<R, Err> =>
        of(async () =>
            map(fn)(await run(aff)));
