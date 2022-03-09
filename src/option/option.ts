export enum OptionType {
  Some = 'Some',
  None = 'None',
}

interface SomeType<E> {
  readonly type: OptionType.Some;
  readonly value: E;
}

interface NoneType {
  readonly type: OptionType.None;
}

export type Option<E> = NoneType | SomeType<E>;

export const None: NoneType = {type: OptionType.None};

export type Chooser<E, F> = (e: E) => Option<F>;

export const Some = <E>(value: E): SomeType<E> => ({
  type: OptionType.Some,
  value,
});
