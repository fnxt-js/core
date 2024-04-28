---
title: allCombinations
description: allCombinations
layout: ../../../../layouts/MainLayout.astro
---

Takes a variable number of input arrays and builds all possible combinations.

## Type

```ts
type allCombinations = <A, B>(a: A[], b: B[]) => [A, B][]
type allCombinations = <A, B, C>(a: A[], b: B[], c: C[]) => [A, B, C][]
//...
type allCombinations = <A, B, C, D, E, F, G, H>(a: A[], b: B[], c: C[], d: D[], e: E[], f: F[], g: G[], h: H[]) => [A, B, C, D, E, F, G, H][]
```

## Example

```ts
import {allCombinations} from 'fnxt/array';

allCombinations([1, 2], ['a', 'b', 'c'], [4, 5]); // -> 
// [
//   [1, 'a', 4], [1, 'a', 5], 
//   [1, 'b', 4], [1, 'b', 5],
//   [1, 'c', 4], [1, 'c', 5],
//
//   [2, 'a', 4], [2, 'a', 5], 
//   [2, 'b', 4], [2, 'b', 5], 
//   [2, 'c', 4], [2, 'c', 5]
// ]
```

## See Also

- [allPairs](../allPairs)
- [interleave](../interleave)
- [zip](../zip)
