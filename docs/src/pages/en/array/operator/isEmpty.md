---
title: isEmpty
description: isEmpty
layout: ../../../../layouts/MainLayout.astro
---
Returns `true` if the array is empty, `false` otherwise.

## Type

```ts
type isEmpty = <E>(s: Array<E>) => boolean
```

## Example

```ts
import * as ARRAY from 'fnxt/array';

const array = [2, 3, 4];
const isEmpty = ARRAY.isEmpty;
isEmpty(array) // -> false
```
