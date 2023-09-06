---
title: every
description: every
layout: ../../../../layouts/MainLayout.astro
---

The `predicate` is applied to the elements of the input array.
If any application returns `false` then the overall result is `false`
and no further elements are tested.
Otherwise, `true` is returned.

## Type

```ts
type every = <E>(predicate: ((e: E) => boolean)) => (s: Array<E>) => boolean
```

## Example

```ts
import {every} from 'fnxt/array';

const array = [0, 1, 2];
const everyEven = every((x: number) => x % 2 == 0);
const everyLessThan3 = every((x: number) => x < 3);
everyEven(array) // -> false
everyLessThan3(array) // -> true
```
