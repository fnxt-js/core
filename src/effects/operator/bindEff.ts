import {UnaryFunction} from 'fnxt/fnxt-types';
import {bind} from 'fnxt/result';
import {Eff, of, run} from '../effect';

export const bindEff = <T, R, Err>(fn: UnaryFunction<T, Eff<R, Err>>) =>
    (eff: Eff<T, Err>): Eff<R, Err> =>
        of(() =>
            bind<T, R, Err>(t =>
                run(fn(t)))(run(eff)));
