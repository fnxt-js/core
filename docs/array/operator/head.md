### ARRAY.head
Returns the first value of an array.
Throws an Error if the array is empty.
#### Type
```ts
type head = <E>(s:Array<E>) => E
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(2, 3, 4);
const head = ARRAY.head;
head(array) // -> 2
```
