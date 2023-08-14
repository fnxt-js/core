export enum ResultType {
  Success = 'Success',
  Failure = 'Failure',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SuccessType<S, F> {
  readonly type: ResultType.Success;
  readonly value: S;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface FailureType<S, F> {
  readonly type: ResultType.Failure;
  readonly value: F;
}

export type Result<S, F> = SuccessType<S, F> | FailureType<S, F>;

export const Success = <S, F>(value: S): SuccessType<S, F> => ({
  type: ResultType.Success,
  value,
});

export const Failure = <S, F>(value: F): FailureType<S, F> => ({
  type: ResultType.Failure,
  value,
});
