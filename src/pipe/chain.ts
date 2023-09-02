interface Chain<E> {
  value: E
  pipe: <F>(map: (e: E) => F) => Chain<F>;
}

export const chain = <E>(value: E): Chain<E> => {
  return {
    pipe: <F>(map: (e: E) => F) => chain(map(value)),
    value: value
  };
}