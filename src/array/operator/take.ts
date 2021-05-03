export const take = <T>(count: number) => (array: T[]): T[] => {
    const result = [];
    if (count >= array.length) {
        return array;
    }
    for (let i = 0; i < count; i++) {
        result.push(array[i]);
    }
    return result;
};

