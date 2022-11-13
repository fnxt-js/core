---
title: ARRAY.splitInto
description: splitInto
layout: ../../../../layouts/MainLayout.astro
---

Splits the input array into at most `count` chunks.

## Type
```ts
type splitInto = <E>(count: number) => (array: Array<E>) => Array<E[]>
```

## Example
```ts
import * as ARRAY from 'fnxt/array';

const array = ARRAY.of(0, 1, 2, 3, 4, 5, 6);
const splitInto = ARRAY.splitInto(3);
splitInto(array)// -> [[0, 1, 2], [3, 4], [5, 6],]]
```
