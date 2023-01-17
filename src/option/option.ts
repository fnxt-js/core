enum OptType {
  Some, None,
}

/**
 * @deprecated
 * to check for type use `isNone` or `isSome`
 */
export const OptionType = OptType;

export interface SomeType<E> {
  readonly type: OptType.Some;
  readonly value: E;
}

export interface NoneType {
  readonly  type: OptType.None;
}

export type Option<E> = NoneType | SomeType<E>;

export const None: NoneType = {type: OptType.None};

export type Chooser<E, F> = (e: E) => Option<F>;

export const Some = <E>(value: E): SomeType<E> => ({
  type: OptType.Some,
  value,
});

export const isSome = <E>(option: Option<E>): option is SomeType<E> & boolean => option.type === OptType.Some;
export const isNone = <E>(option: Option<E>): option is NoneType & boolean => option.type === OptType.None;
