---
title: ARRAY.some
description: some
layout: ../../../../layouts/MainLayout.astro
---
The `predicate` is applied to the elements of the input array. 
If any application returns `true` then the overall result is `true` 
and no further elements are tested. 
Otherwise, `false` is returned.

## Type
```ts
type some= <E>(predicate:((e:E) => boolean)) => (s:Array<E>) => boolean
```

## Example
```ts
import * as ARRAY from 'fnxt/array';
const array = ARRAY.of(0, 1, 2);
const some = ARRAY.some((x: number) => x % 2 == 0);
some(array) // -> false
```
