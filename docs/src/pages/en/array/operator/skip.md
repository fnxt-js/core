---
title: skip
description: skip
layout: ../../../../layouts/MainLayout.astro
---

The `skip` function is used to create a new array that contains all elements of an input array except for the first `count` elements.

## Type

```ts
type skip = (count: number) => <E>(array: Array<E>) => Array<E>
```

### Syntax
- `count` (number): The number of elements to skip from the beginning of the input array. 
If count is less than or equal to zero, 
no elements are skipped, and the original array is returned.
- `array` (Array<T>): The input array from which elements will be skipped.

### Return Value

Returns a new array containing all elements of the input array except for the first count elements. 
If count is less than or equal to zero, the function returns the entire input array.
The input array is not modified.

## Example

```ts
import {skip} from 'fnxt/array';

const numbers = [1, 2, 3, 4, 5];
const result = skip(2)(numbers);

console.log(result);
// Output: [3, 4, 5]
```

## See Also
- [skipWhile](/core/en/array/operator/skipWhile)
- [take](/core/en/array/operator/take)
- [takeWhile](/core/en/array/operator/takeWhile)
- [truncate](/core/en/array/operator/truncate)
- [filter](/core/en/array/operator/filter)