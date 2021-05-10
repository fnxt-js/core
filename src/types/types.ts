export type Thunk<R> = () => R;
export type UnaryFunction<E, R> = (e: E) => R;
export type BinaryFunction<E, F, R> = (e: E, f: F) => R;

export type NumberProjection<E> = UnaryFunction<E, number>;
export type KeyProjection<E> = UnaryFunction<E, string> | NumberProjection<E>;
export type Predicate<E> = (e: E) => boolean;
export type Comparer<E> = (e: E, f: E) => number;
export type Reduction<E> = (e: E, f: E) => E;
export type Folder<E, F> = (f: F, e: E) => F;


export type Tuple<E, F> = [e: E, f: F];
