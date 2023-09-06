---
title: interleave
description: interleave
layout: ../../../../layouts/MainLayout.astro
---
This function takes 
an array `arr1` of type `E` as its first argument 
and
an array `arr2` of type `E` as its second argument. 

The function `interleave` takes two arrays of the same type E as input, and returns a single array that is the result of interleaving the elements of the two input arrays.
## Signature

```ts
type interleave = <E>(arr1: E[]) => (arr2: E[]) => Array<E>
```

## Parameters

`arr1`: An array of type `E`.
`arr2`: An array of type `E`.

## Returns

An array of tuples `E[]`

```ts
import {interleave} from 'fnxt/array';

const result = interleave(['1', '2', '3'])(['a', 'b', 'c']);
console.log(result);
// Output: ['1', 'a', '2', 'b', '3', 'c']
```


## See Also
- [allCombinations](./allCombinations)
- [allPairs](./allPairs)
- [interleave](./interleave)
- [zip](./zip)
