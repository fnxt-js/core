export function rotate(offset: number) {
  return <T>(array: T[]): T[] => {
    const index = offset % array.length;
    return array.slice(index).concat(array.slice(0, index));
  };
}
