export const rotate = (offset: number) =>

  <S>(array: S[]): S[] => {

    const index = offset % array.length + (offset < 0 ? array.length : 0);
    const result: S[] = [];
    for (let i = index; i < array.length; i++) {
      result.push(array[i]);
    }

    for (let i = 0; i < index; i++) {
      result.push(array[i]);
    }

    return result;
  };

