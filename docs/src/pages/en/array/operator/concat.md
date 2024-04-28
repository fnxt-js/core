---
title: concat
description: concat
layout: ../../../../layouts/MainLayout.astro
---

Takes two arrays and concatenates them.

## Type

```ts
type concat = <E>(array1: Array<E>) => (array2: Array<E>) => Array<E>
```

## Example

```ts
import {concat} from 'fnxt/array';

const array1 = [0, 1, 2, 3];
const array2 = [10, 11, 12, 13];
concat(array1)(array2) // -> [0, 1, 2, 3, 10, 11, 12, 13];
```

## See Also

- [collect](../collect)
- [flatten](../flatten)