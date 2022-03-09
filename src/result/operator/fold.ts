import {Failure, Result, ResultType, Success} from '../result';
import {Folder} from 'fnxt/fnxt-types';


export const fold = <S1, F1, S2, F2>(
  successFolder: Folder<S1, S2>, initSuccess: S2,
  failureFolder: Folder<F1, F2>, initFailure: F2,
) =>
  (results: Result<S1, F1>[]): Result<S2, F2> => {
    const successes: S1[] = [];
    const failures: F1[] = [];
    for (const result of results) {
      if (result.type === ResultType.Success) {
        successes.push(result.value);
      } else {
        failures.push(result.value);
      }
    }
    return (failures.length)
      ? Failure(failures.reduce((p, c) => failureFolder(p, c), initFailure))
      : Success(successes.reduce((p, c) => successFolder(p, c), initSuccess));


  };

