### ARRAY.isEmpty

Returns `true` if the array is empty, `false` otherwise.
#### Type
```ts
isEmpty: <E>(s:Array<E>) => boolean
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(2, 3, 4);
const isEmpty = ARRAY.isEmpty;
isEmpty(array) // -> false
```
