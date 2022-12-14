---
title: ARRAY.splitInto
description: splitInto
layout: ../../../../layouts/MainLayout.astro
---




Splits the input array into at most `count` chunks.

## Type
```ts
type splitInto = <E>(count: number) => (array: E[]) => E[][]
```

## Example
```ts
import * as ARRAY from 'fnxt/array';

const array = [1, 2, 3, 4, 5, 6, 7];
const splitInto = ARRAY.splitInto(3);
splitInto(array)// -> [[1, 2, 3], [4, 5], [6, 7]]
```

## See Also
- [chunkBySize](../chunkBySize)
- [partition](../partition)
