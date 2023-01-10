export function rotate(offset: number) {
  return <S>(array: S[]): S[] => {
    const length = array.length;
    const index = ((offset % length) + length) % length;
    return array.slice(index).concat(array.slice(0, index));
  };
}
