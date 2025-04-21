export interface SomeType<E> { readonly value: E; }

export type NoneType = readonly never[]

export type Option<E> = NoneType | SomeType<E>;

export const None: NoneType = [] as const;

export type Chooser<E, F> = (e: E) => Option<F>;

export const Some = <E>(value: E): SomeType<E> => ({
  value,
});

export const isSome = <E>(option: Option<E>): option is SomeType<E> => 'value' in option;
export const isNone = <E>(option: Option<E>): option is NoneType => !isSome(option);
