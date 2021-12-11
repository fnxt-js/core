import {Result, ResultType, Success} from '../result';
import {UnaryFunction} from '../../fnxt-types';

export const map = <T, R>(fn: UnaryFunction<T, R>) =>
  <Err>(result: Result<T, Err>): Result<R, Err> =>
    (result.type === ResultType.Failure) ? result : Success(fn(result.value));


