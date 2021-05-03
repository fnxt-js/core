export type Thunk<R> = () => R;
export type UnaryFunction<E, R> = (e: E) => R;
export type BinaryFunction<E, F, R> = (e: E, f: F) => R;

export type KeyProjection<E> = UnaryFunction<E, string | number>;
export type Predicate<E> = (e: E) => boolean;
export type Reduction<E> = (e: E, f: E) => E;
export type Folder<E, F> = (e: F, f: E) => F;


export type Tuple<E, F> = [e: E, f: F];
