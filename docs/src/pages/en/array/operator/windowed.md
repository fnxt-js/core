---
title: windowed
description: windowed
layout: ../../../../layouts/MainLayout.astro
---
Splits an array into subarrays (windows) of a specified size, 
moving the window by one element at a time.
## Type

```ts
type windowed = (windowSize: number) => <T>(array: T[]) => T[][]
```

## Parameters

- `windowSize` (number): The size of each window.
- `array` (Array): An array of elements to split into windows.

## Returns

- (Array of Arrays): An array of subarrays (windows) containing 
elements from the input array.

## Example

```ts
const inputArray = [1, 2, 3, 4, 5, 6];
const windowSize = 3;

const resultWindows = windowed(windowSize)(inputArray);
// -> [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]]
```

## Notes

- The `windowSize` parameter determines the size of each window. 
It should be a positive integer (greater than 1).
- If the `windowSize` is less than 1, an error will be thrown.

- The function splits the input array into subarrays (windows) 
of the specified size, moving the window one element at a time. 
If the input array is too short to create a window of the specified 
size, an empty array is included in the result.

- The input array remains unaltered, and a new array of subarrays 
is returned.

- If the `windowSize` is greater than the length of the input array, 
the result will be an empty array.

- If the input array is empty, an empty array is returned.



## See Also

- [strideWindowed](./strideWindowed)
- [stride](./stride)
- [pairwise](./pairwise)
