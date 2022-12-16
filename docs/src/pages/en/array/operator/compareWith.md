---
title: ARRAY.compareWith
description: compareWith
layout: ../../../../layouts/MainLayout.astro
---

Returns the first non-zero result from the comparison function `comparer`.
If the first list has a larger element, the return value is always positive.
If the second list has a larger element, the return value is always negative.
When the elements are equal in the two lists,
1 is returned if the first list is longer,
0 is returned if they are equal in length,
and -1 is returned when the second list is longer.

## Type

```ts
type compareWith = <T>(comparer: Comparer<T>) => (a: T[]) => (b: T[]) => number
```

## Example

```ts
import {compareWith} from 'fnxt/array';

compareWith([1, 2, 3])([1, 2, 4]) // -> -1
compareWith([1, 2, 3])([1, 2, 3]) // -> 0
```
