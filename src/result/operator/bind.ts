import {Result, ResultType} from '../result';
import {UnaryFunction} from '../../fnxt-types';


export const bind = <T, R, Err>(fn: UnaryFunction<T, Result<R, Err>>) =>
  (result: Result<T, Err>): Result<R, Err> =>
    (result.type === ResultType.Failure) ? result : fn(result.value);


