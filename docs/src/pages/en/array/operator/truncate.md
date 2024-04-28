---
title: truncate
description: truncate
layout: ../../../../layouts/MainLayout.astro
---

The `truncate` function is used to create a new array 
containing only the first `count` elements of an input array. 
It effectively shortens the array to the specified length.
## Type

```ts
type truncate = (count: number) => <E>(array: Array<E>) => Array<E>
```

- `count` (number): The number of elements to keep from the beginning of the input array. If count is greater than or equal to the length of the input array, the entire array is returned.
- `array` (Array<T>): The input array from which elements will be retained.


### Return Value

Returns a new array containing the first `count` elements from the input array. 
If count is greater than or equal to the length of the input array, 
the function returns a copy of the entire input array. 
The original array is not modified.

## Example

```ts
import {truncate} from 'fnxt/array';

const array = [0, 1, 2, 3, 4];
const result = truncate(2)(array);

console.log(result);
// Output: [0, 1]
```

## See Also
- [skip](../skip)
- [skipWhile](../skipWhile)
- [take](../take)
- [takeWhile](../takeWhile)
- [filter](../filter)