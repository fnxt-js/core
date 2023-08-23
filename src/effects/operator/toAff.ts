import {Aff, Eff, of, run} from '../effect';

export const toAff = <S, F>(eff: Eff<S, F>): Aff<S, F> =>
    of(() =>
        Promise.resolve(run(eff)));
