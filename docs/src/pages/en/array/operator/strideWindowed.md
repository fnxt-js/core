---
title: strideWindowed
description: strideWindowed
layout: ../../../../layouts/MainLayout.astro
---
Splits an array into subarrays (windows) of a specified `windowSize`, 
moving the window by `stride` elements at a time.
## Type

```ts
type strideWindowed = (stride: number) => (windowSize: number) => <T>(array: T[]) => T[][]
```

## Parameters

- `stride` (number): The step size to move the window in the input array. Must be greater than or equal to 1.
- `windowSize` (number): The size of each window.
- `array` (Array): An array of elements to split into windows.

## Returns

- (Array of Arrays): An array of subarrays (windows) containing 
elements from the input array.

## Example

```ts
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stride = 2;
const windowSize = 3;

const resultWindows = strideWindowed(stride)(windowSize)(inputArray);
// -> [[1, 2, 3], [3, 4, 5], [5, 6, 7], [7, 8, 9]]
```

## Notes
- The `stride` parameter determines the step size to move the window 
  in the input `array`. 
- It should be a positive integer greater than or equal to 1.
- If the `stride` is less than 1, an error will be thrown.
 
- The `windowSize` parameter determines the size of each window. 
  It should be a positive integer (greater than or equal to 1).
- If the `windowSize` is less than 1, an error will be thrown.

- The function splits the input `array` into subarrays (windows) 
of the specified size, moving the window `stride` elements at a time. 
If the input array is too short to create a window of the specified 
size, an empty array is included in the result.

- The input `array` remains unaltered, and a new array of subarrays 
is returned.

- If the `windowSize` is greater than the length of the input array, 
the result will be an empty array.

- If the input `array` is empty, an empty array is returned.



## See Also

- [windowed](./windowed)
- [stride](./stride)
- [pairwise](./pairwise)
- [chunkBySize](./chunkBySize)
