export const head = <T>(array: T[]): T => {
    const [head] = array;
    if (!array.length) {
        throw Error();
    }
    return head;
};
