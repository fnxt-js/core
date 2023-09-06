---
title: skipWhile
description: skipWhile
layout: ../../../../layouts/MainLayout.astro
---
The `skipWhile` function is used to create a new array that contains 
all elements of an input array except for the elements at the
beginning of the array that satisfy a specified condition.

## Type

```ts
type skipWhile = <E>(predicate: Predicate<E>) => (array: Array<E>) => Array<E>
```

- `predicate` (Function): A function that takes an element of the input array as its argument and returns a boolean value. Elements satisfying the condition 
returned as `true` by the predicate function will be skipped.
- `array` (Array<T>): The input array from which elements will be skipped.

### Return Value

Returns a new array containing all elements of the input array except 
for the elements at the beginning that satisfy the condition specified by the `predicate` function. 
The original `array` is not modified.

## Example

```ts
import { skipWhile }  from 'fnxt/array';

const numbers = [1, 2, 3, 4, 5];
const isLessThanThree = (x: number) =>  x < 3;
const result = skipWhile(isLessThanThree)(numbers);

console.log(result);
// Output: [3, 4, 5]
```

## See Also
- [skip](./skip)
- [take](./take)
- [takeWhile](./takeWhile)
- [truncate](./truncate)
- [filter](./filter)