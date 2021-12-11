import {Result, ResultType} from '../result';
import {UnaryFunction} from '../../fnxt-types';

export const bindAsync = <T, R, Err>(fn: UnaryFunction<T, Promise<Result<R, Err>>>) =>
  async (result: Result<T, Err>): Promise<Result<R, Err>> =>
    (result.type === ResultType.Failure) ? result : fn(result.value);


