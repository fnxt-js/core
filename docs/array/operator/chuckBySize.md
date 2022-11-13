### ARRAY.chunkBySize
Divides the input array into chunks of size at most chunkSize.

#### Type
```ts
type chunkBySize = <E>(count: number) => (array1: Array<E>) => Array<E[]>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';

const array = ARRAY.of(0, 1, 2, 3, 4, 5, 6);
const chunkBySize = ARRAY.chunkBySize(3);
chunkBySize(array)// -> [[0, 1, 2], [3, 4, 5], [6],]]
```
