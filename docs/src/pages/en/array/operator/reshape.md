---
title: reshape
description: reshape
layout: ../../../../layouts/MainLayout.astro
---

## Description
The `reshape` function is designed to reshape a flat array into a multi-dimensional array according to the specified dimensions. It takes an array of dimensions and returns a function that accepts a flat array as input and returns a multi-dimensional array based on the provided dimensions.

## Parameters
- `dimensions`: An array of numbers representing the desired dimensions for the output array.

## Returns
A function that takes an array as input and returns a multi-dimensional array based on the specified dimensions.

## Throws
- `Error`: If the total size of the dimensions does not match the length of the input array.

## Type

```ts
type reshape = (dimensions: [number,]) => <A>(a: A[]) => [A][];
type reshape = (dimensions: [number, number,]) => <A>(a: A[]) => [A][][];
//...
type reshape = (dimensions: [number, number, number, number, number, number, number, number]) =>  <A>(a: A[]) => [A][][][][][][][][];
```

## Example

```typescript
import { reshape }  from 'fnxt/array';

const dimensions = [2, 3, 2];
const fn = reshape(dimensions);

const flatArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const multiDimensionalArray = fn(flatArray);

console.log(multiDimensionalArray);
// Output: [
//   [[1, 2], [3, 4], [5, 6]],
//   [[7, 8], [9, 10], [11, 12]]
// ]
```


## See Also

- [allCombinations](./allCombinations)
- [cartesian](./cartesian)