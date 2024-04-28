---
title: pairwise 
description: pairwise 
layout: ../../../../layouts/MainLayout.astro
---
Creates pairs of adjacent elements in an array.

## Parameters

- `array` (Array): An array of elements for which pairs of adjacent elements are to be created.

## Returns

- (Array of Arrays): An array of pairs, where each pair is represented as an array containing two adjacent elements from the input array.


## Example

```ts
const inputArray = [1, 2, 3, 4, 5, 6];
const windowSize = 3;

const resultWindows = pairwise (windowSize)(inputArray);
// -> [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]]
```

## Notes

- The function creates pairs of adjacent elements in the input array. 
  If the input array has N elements, the resulting array will have N-1 pairs.
- The input array remains unaltered, and a new array of pairs is returned.
- If the input array has less than two elements, an empty array is returned 
  since there are no adjacent elements to pair.
- The function `pairwise` is an optimized version of `windowed(2)`.
- This function does not modify the original array.



## See Also

- [windowed](../windowed)
- [allPairs](../allPairs)
- [zip](../zip)
