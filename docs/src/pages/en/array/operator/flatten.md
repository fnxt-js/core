---
title: flatten
description: flatten
layout: ../../../../layouts/MainLayout.astro
---


The `flatten` function takes an array of arrays and returns a flattened array containing all the elements from the input arrays.

## Type

```ts
type flatten = <E>(array: E[][]) => E[]
```

## Parameters

`array` (type: E[][]): An array of arrays to be flattened. Each inner array contains elements of type E.

## Return Value

Returns a flattened array containing all elements from the input arrays, with each element's type preserved.

## Errors

If the input array is not an array of arrays, or if any of the inner arrays is not an array, the function will throw an error.

## Example

```ts
import {flatten} from 'fnxt/array';

const nestedArray: number[][] = [[1, 2, 3], [4], [5, 6]];
const flattenedArray: number[] = flatten(nestedArray);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

```

## See Also
- [concat](../concat)
- [collect](../collect)