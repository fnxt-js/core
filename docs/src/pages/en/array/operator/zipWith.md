---
title: zipWith
description: zipWith
layout: ../../../../layouts/MainLayout.astro
---
Combines two arrays element-wise using a specified binary function.

## Signature

```ts
type zipWith = <E, F, R>(mapper: BinaryFunction<E, F, R>) => (arr1: E[]) => (arr2: F[]) => Array<R>
```

## Parameters

`mapper` (BinaryFunction): A binary function that takes elements from both arrays and returns a value.

`arr1` (Array): The first array to be zipped.

`arr2` (Array): The second array to be zipped.

## Returns

A new array containing the result of applying the `mapper` function to pairs of elements from `arr1` and `arr2`.

```ts
import { zipWith } from './zipWith';

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const combineElements = (a, b) => `${a}-${b}`;

const resultArray = zipWith(combineElements)(array1)(array2);
// resultArray will be ['1-a', '2-b', '3-c']
```

## See Also
- [map](../map)
- [reduce](../reduce)
- [zip](../zip)
- [pairwiseWith](../pairwiseWith)
