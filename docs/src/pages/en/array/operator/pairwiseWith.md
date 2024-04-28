---
title: pairwiseWith 
description: pairwiseWith 
layout: ../../../../layouts/MainLayout.astro
---
Creates elements by combining adjacent elements in an array.

## Parameters

`fn` (Reduction): A reduction function that takes two elements of the array and returns a single value.

`array` (Array): An array of elements for which pairs of adjacent elements are to be created.

## Returns

A new array containing the result of applying the reduction function to pairs of adjacent elements.

## Example

```ts
import { pairwiseWith } from './pairwiseWith';

const inputArray = [1, 2, 3, 4, 5];
const sumReducer = (a, b) => a + b;

const resultArray = pairwiseWith(sumReducer)(inputArray);
// resultArray will be [3, 5, 7, 9]
```

## Notes

- The `pairwiseWith` function applies the provided reduction function to pairs of adjacent elements in the input array.

- The input array remains unaltered, and a new array is returned.

- If the input array has less than two elements, an empty array is returned since there are no adjacent elements to pair.

- The reduction function should take two arguments and return a value.

- This function does not modify the original array.



## See Also

- [map](../map)
- [reduce](../reduce)
- [pairwise](../pairwise)
- [zipWith](../zipWith)
