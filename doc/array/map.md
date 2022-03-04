
### ARRAY.map
Maps each value of an array to another value and returns a new array.

#### Type
```
map: (E => R) => Array<E> => Array<R>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';

const seq = [0, 1, 2];
const plusOne = ARRAY.map((x: number) => x + 1);
plusOne(seq) // -> [2, 3, 4]
```
