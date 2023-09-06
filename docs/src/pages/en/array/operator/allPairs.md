---
title: allPairs
description: allPairs
layout: ../../../../layouts/MainLayout.astro
---

Returns a new array that contains all pairings of elements from two array.

## Type

```ts
type allPairs = <A>(a: A[]) => <B>(b: B[]) => [A, B][]
```

## Example

```ts
import {allPairs} from 'fnxt/array';

allPairs([1, 2, 3])(['a', 'b', 'c']); // -> 
// [
//   [1, 'a'], [1, 'b'], [1, 'c'],
//   [2, 'a'], [2, 'b'], [2, 'c'],
//   [3, 'a'], [3, 'b'], [3, 'c'],
// ]
```

## See Also

- [allCombinations](./allCombinations)
- [zip](./zip)
