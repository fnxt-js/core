import {append, splitAt} from 'fnxt/array';

export const rotate = (offset: number) => <S>(array: S[]): S[] => {
  const [front, back] = splitAt(offset %= array.length)(array);
  return append(back)(front);
};
