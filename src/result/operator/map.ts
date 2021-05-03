import {UnaryFunction} from '../../types/types';
import {Result, ResultType, Success} from '../result';

export const map = <T, R, Err>(fn: UnaryFunction<T, R>) => (
    result: Result<T, Err>
): Result<R, Err> => {
    switch (result.type) {
        case ResultType.Failure:
            return result;
        case ResultType.Success:
            return Success(fn(result.value));
    }
};
