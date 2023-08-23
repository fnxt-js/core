import {Thunk} from 'fnxt/fnxt-types';
import {Result} from 'fnxt/result';

type AffThunk<S, F> = Thunk<Promise<Result<S, F>>>;
type EffThunk<S, F> = Thunk<Result<S, F>>;

type EffectThunk<S, F> = AffThunk<S, F> | EffThunk<S, F>;

type EffectResult<S, F> = Promise<Result<S, F>> | Result<S, F>;

export enum EffectType {
  Aff = 'Aff',
  Eff = 'Eff',
}

export interface Aff<S, F> {
  readonly type: EffectType.Aff;
  readonly thunk: AffThunk<S, F>;
}

export interface Eff<S, F> {
  readonly type: EffectType.Eff;
  readonly thunk: EffThunk<S, F>;
}

export type Effect<S, F> = Eff<S, F> | Aff<S, F>;

export const ofAsync = <S, F>(thunk: AffThunk<S, F>): Aff<S, F> => {
  return {
    type: EffectType.Aff,
    thunk
  };
};


export const ofSync = <S, F>(thunk:  EffThunk<S, F>): Eff<S, F> => {
  return {
    type: EffectType.Eff,
    thunk
  };
};

export function run<S, F>(aff: Aff<S, F>): Promise<Result<S, F>>;
export function run<S, F>(eff: Eff<S, F>): Result<S, F>;
export function run<S, F>(effect: Effect<S, F>): EffectResult<S, F> {
  return effect.thunk();
}

//
// export const runAff = <S, F>(aff: Aff<S, F>): Promise<Result<S, F>> =>
//     aff.thunk();
//
// export const runEff = <S, F>(eff: Eff<S, F>): Result<S, F> =>
//     eff.thunk();


// const asyncMap = <T, R>(fn: UnaryFunction<T, R>) =>
//     async <Err>(result: Promise<Result<T, Err>>): Promise<Result<R, Err>> =>
//         mapResult<T, R>(fn)(await result);
// const asyncBind = <T, R, Err>(fn: UnaryFunction<T, Result<R, Err>>) =>
//     async (result: Promise<Result<T, Err>>): Promise<Result<R, Err>> =>
//         bindResult(fn)(await result);



