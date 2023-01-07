---
title: zip3
description: zip3
layout: ../../../../layouts/MainLayout.astro
---
This function takes 
an array `arr1` of type `E` as its first argument,
an array `arr2` of type `F` as its second argument
and
an array `arr3` of type `G` as its third argument.

This will then return an array of triples, where each triple is of type `Triple<E, F, G>`.

## Signature

```ts
type zip3 = <E>(arr1: E[]) => <F>(arr2: F[]) => <G>(arr3: G[]) => Array<Triple<E, F, G>>
```

## Parameters

`arr1`: An array of type `E`.
`arr2`: An array of type `F`.
`arr3`: An array of type `G`.

## Returns

An array of triples `Triple<E, F, G>[]`

```ts
const result = zip3([1, 2, 3])(['a', 'b', 'c'])([true, false, true]);
console.log(result);
// Output: [[1, 'a', true], [2, 'b', false], [3, 'c', true]]
```
