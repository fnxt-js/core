export const tail = <T>(array: T[]): T[] => {
    const [, ...tail] = array;
    if (!array.length) {
        throw Error();
    }
    return tail;
};
