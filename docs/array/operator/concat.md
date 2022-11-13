### ARRAY.concat
Takes two arrays and concatenates them.

#### Type
```ts
type concat = <E>(array1: Array<E>) => (array2: Array<E>) => Array<E>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';

const array1 = ARRAY.range(0, 4, 1);
const array2 = ARRAY.range(10, 14, 1);
ARRAY.concat(array1)(array2) // -> [0, 1, 2, 3, 10, 11, 12, 13];
```
