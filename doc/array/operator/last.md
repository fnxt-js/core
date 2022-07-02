### ARRAY.last
Returns the last value of an array. Consumes the array before returning.
Throws an Error if the array is empty.
Does not terminate on infinite arrays.
#### Type
```ts
last: <E>(s:Array<E>) => E
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(2, 3, 4);
const last = ARRAY.last;
last(array) // -> 4
```
