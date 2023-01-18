enum _OptionType {
  Some, None,
}

/**
 * @deprecated
 * to check for type use `isNone` or `isSome`
 */
export const OptionType = _OptionType;

export interface SomeType<E> {
  readonly type: _OptionType.Some;
  readonly value: E;
}

export interface NoneType {
  readonly  type: _OptionType.None;
}

export type Option<E> = NoneType | SomeType<E>;

export const None: NoneType = {type: _OptionType.None};

export type Chooser<E, F> = (e: E) => Option<F>;

export const Some = <E>(value: E): SomeType<E> => ({
  type: _OptionType.Some,
  value,
});

export const isSome = <E>(option: Option<E>): option is SomeType<E>  => option.type === _OptionType.Some;
export const isNone = <E>(option: Option<E>): option is NoneType  => option.type === _OptionType.None;
