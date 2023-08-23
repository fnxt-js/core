import {UnaryFunction} from 'fnxt/fnxt-types';
import {bindAsync} from 'fnxt/result';
import {Aff, of, run} from '../effect';

export const bindAff = <T, R, Err>(fn: UnaryFunction<T, Aff<R, Err>>) =>
    (aff: Aff<T, Err>): Aff<R, Err> =>
        of(async () =>
            bindAsync<T, R, Err>((t: T) =>
                run<R, Err>(fn(t)))(await run<T, Err>(aff)));
