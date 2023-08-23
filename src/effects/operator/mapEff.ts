import {UnaryFunction} from 'fnxt/fnxt-types';
import {map} from 'fnxt/result';
import {Eff, of, run} from '../effect';

export const mapEff = <T, R>(fn: UnaryFunction<T, R>) =>
    <Err>(eff: Eff<T, Err>): Eff<R, Err> =>
        of(() =>
            map(fn)(run(eff)));
