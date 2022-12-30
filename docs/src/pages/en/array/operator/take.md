---
title: take
description: take
layout: ../../../../layouts/MainLayout.astro
---

Returns the first N elements of the array.

## Type

```ts
type take = (count: number) => <E>(array: Array<E>) => Array<E>
```

## Example

```ts
import * as ARRAY from 'fnxt/array';

const array = [0, 1, 2, 3, 4];
ARRAY.take(2)(array) // -> [0, 1];
```
