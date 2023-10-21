---
title: stride
description: stride
layout: ../../../../layouts/MainLayout.astro
---
Creates a new array by taking every nth element from the input array.

## Type

```ts
type stride = (step: number) => <E>(array: E[]) => E[] 
```


## Parameters

- `step` (number): The step size for selecting elements from the input array.
- `array` (Array): An array of elements from which to select elements.

## Returns

- (Array): A new array containing every nth element from the input array.

## Example

```ts
import {stride} from 'fnxt/array';

const array = [1, 2, 3, 4, 5, 6, 7];
const stride = stride(3);
stride(array) // -> [1, 4, 7]
```

## See Also

- [skip](./skip)
- [take](./take)
