### ARRAY.takeWhile
Returns an array that contains all elements of the original array 
while the given `predicate` returns `true`, 
and then returns no further elements.
#### Type
```ts
type takeWhile = <E>(predicate: Predicate<E>) => (array: Array<E>) => Array<E>
```

#### Example
```ts
import * as ARRAY from 'fnxt/array';

const array = ARRAY.range(0, 10, 1);
ARRAY.takeWhile(lessThan(5))(array) // -> [0, 1, 2, 3, 4];
```
