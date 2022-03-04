
### ARRAY.filter
Filter values of an array with a predicate and returns a new array.

#### Type
```
map: (E => boolean) => Array<E> => Array<E>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(0, 1, 2);
const isEven = ARRAY.filter((x: number) => x % 2 == 0);
[...isEven(array)] // -> {1, 2}
```
