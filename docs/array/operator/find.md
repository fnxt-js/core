
### ARRAY.find
Finds the first values of an array that satisfies the `predicate`. Returns `undefind` if no element is found. 

#### Type
```ts
type find= <E>(predicate:((e:E) => boolean)) => (a:Array<E>) => E | undefind
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(0, 1, 2);
const findEven = ARRAY.find((x: number) => x % 2 == 0);
findEven(array) // -> 0
```
