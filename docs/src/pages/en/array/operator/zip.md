---
title: zip
description: zip
layout: ../../../../layouts/MainLayout.astro
---
This function takes 
an array `arr1` of type `E` as its first argument 
and
an array `arr2` of type `F` as its second argument. 

This will then return an array of tuples, where each tuple is of type `Tuple<E, F>`.

## Signature

```ts
type zip = <E>(arr1: E[]) => <F>(arr2: F[]) => Array<Tuple<E, F>>
```

## Parameters

`arr1`: An array of type `E`.
`arr2`: An array of type `F`.

## Returns

An array of tuples `Tuple<E, F>[]`

```ts
const result = zip([1, 2, 3])(['a', 'b', 'c']);
console.log(result);
// Output: [[1, 'a'], [2, 'b'], [3, 'c']]
```

## See Also
- [allCombinations](/core/en/array/operator/allCombinations)
- [allPairs](/core/en/array/operator/allPairs)
- [zip3](/core/en/array/operator/zip3)
