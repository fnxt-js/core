---
title: groupBy
description: groupBy
layout: ../../../../layouts/MainLayout.astro
---

This function groups the elements of an array into subarrays based on the keys returned by a mapping function.

## Type

```ts
type fun = <E>(mapping: KeyProjection<E>)=> (array: E[]) => E[][]
type KeyProjection<E> = (element: E) => string | number;
```

## Example

```ts
import {groupBy} from 'fnxt/array';

const fn = groupBy<number>(x => x % 3);
fn([1, 2, 3, 4]) // -> [[3], [1, 4], [2]];
```
