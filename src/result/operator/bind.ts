import {UnaryFunction} from '../../types/types';
import {Result, ResultType} from '../result';

export const bind = <T, R, Err>(fn: UnaryFunction<T, Result<R, Err>>) => (
    result: Result<T, Err>
): Result<R, Err> => {
    switch (result.type) {
        case ResultType.Failure:
            return result;
        case ResultType.Success:
            return fn(result.value);
    }
};
