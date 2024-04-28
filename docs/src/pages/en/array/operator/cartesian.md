---
title: cartesian
description: cartesian
layout: ../../../../layouts/MainLayout.astro
---

## Description
The `cartesian` function calculates the Cartesian product of multiple arrays. It takes a variable number of arrays as arguments and returns an array of arrays representing all possible combinations of elements from the input arrays.

## Parameters
- `...arrays`: Arrays of elements.

## Returns
An array of arrays representing the Cartesian product of the input arrays.

## Type

```ts
type  cartesian = () => [];
type  cartesian<A> = (a: A[]) => [A][];
type  cartesian<A, B> = (a: A[], b: B[]) => [A, B][][];
//...
type  cartesian<A, B, C, D, E, F, G, H> = (a: A[], b: B[], c: C[], d: D[], e: E[], f: F[], g: G[], h: H[]) => [A, B, C, D, E, F, G, H][][][][][][][];
```


## Example
```typescript
import { cartesian } from './path/to/cartesian';

const result = cartesian([1, 2], ['a', 'b', 'c'], [true, false]);

console.log(result);
// Output: [
//   [
//     [[1,"a",true],[1,"a",false]],
//     [[1,"b",true],[1,"b",false]],
//     [[1,"c",true],[1,"c",false]]
//   ],
//   [
//     [[2,"a",true],[2,"a",false]],
//     [[2,"b",true],[2,"b",false]],
//     [[2,"c",true],[2,"c",false]]
//   ]
// ]
```



## See Also

- [allCombinations](../allCombinations)
- [reshape](../reshape)