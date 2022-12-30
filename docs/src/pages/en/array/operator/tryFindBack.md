---
title: ARRAY.tryFindBack
description: tryFindBack
layout: ../../../../layouts/MainLayout.astro
---

Finds an `Option` of the last value of an array that satisfies the `predicate`. Returns `None` if no element is found.

## Type

```ts
type tryFind = <E>(predicate: ((e: E) => boolean)) => (a: Array<E>) => E | undefind
```

## Example

```ts
import * as ARRAY from 'fnxt/array';

const array = [1, 2, 3, 4, 5];
const findEven = ARRAY.tryFindBack((x: number) => x % 2 == 0);
findEven(array) // -> Some(4)
```
