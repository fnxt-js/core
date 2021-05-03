export const chunkBySize = <T>(chunkSize: number) => (array: T[]): T[] => {
    const result = [];
    let chunk = [];
    let count = 0;
    // result.push(chunk);
    for (const t of array) {
        chunk.push(t);
        if (++count === chunkSize) {
            count = 0;
            result.push(chunk);
            chunk = [];
        }
    }
    if (count !== 0) {
        result.push(chunk);
    }
    return result;

};

