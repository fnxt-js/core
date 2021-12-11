import {UnaryFunction} from '../../fnxt-types';
import {Failure, Result, ResultType} from '../result';

export const mapFailure = <T, R1, R2>(fn: UnaryFunction<R1, R2>) => (
    result: Result<T, R1>
): Result<T, R2> => {
    switch (result.type) {
        case ResultType.Success:
            return result;
        case ResultType.Failure:
            return Failure(fn(result.value));
    }
};
