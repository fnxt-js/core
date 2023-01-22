export type Thunk<R> = () => R;
export type Consumer<E> = UnaryFunction<E, void>;
export type UnaryFunction<E, R> = (e: E) => R;
export type Mapping<E, R> = UnaryFunction<E, R>;
export type BinaryFunction<E, F, R> = (e: E, f: F) => R;


export type NumberProjection<E> = UnaryFunction<E, number>;
export type StringProjection<E> = UnaryFunction<E, string>;
export type KeyProjection<E> = StringProjection<E> | NumberProjection<E>;
export type PropertyProjection<E ,F extends string|number = string|number> = UnaryFunction<E, F>;
export type Predicate<E> = (e: E) => boolean;
export type Comparer<E> = BinaryFunction<E, E, number>;
export type Reduction<E> = BinaryFunction<E, E, E>;
export type Folder<E, F> = BinaryFunction<F, E, F>;
export type Mutation<E> = UnaryFunction<E, E>;

export interface Dictionary<E> {
  [name: string]: E;
}


export type Nullish = null | undefined;
export type MaybeNullish<T> = T | Nullish;

export type Tuple<E, F> = readonly [E, F];
export type Triple<E, F,G> = readonly [E, F,G];

export type Gen<E> = Generator<E, void, unknown>;
export type Seq<E> = { [Symbol.iterator](): Gen<E> } | Iterable<E>
