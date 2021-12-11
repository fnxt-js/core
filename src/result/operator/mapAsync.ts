import {UnaryFunction} from '../../fnxt-types';
import {Result, ResultType, Success} from '../result';

export const mapAsync = <T, R>(fn: UnaryFunction<T, Promise<R>>) =>
  async <Err>(result: Result<T, Err>): Promise<Result<R, Err>> =>
    (result.type === ResultType.Failure) ? result : Success(await fn(result.value));
