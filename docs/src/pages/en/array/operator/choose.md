---
title: ARRAY.choose
description: choose
layout: ../../../../layouts/MainLayout.astro
---

Applies a function to each element in an array and then returns an array of values v where 
the applied function returned Some(v). Returns an empty array when the input array is empty 
or when the applied chooser function returns None for all elements.

## Type
```ts
type choose = <E,F>(e: Chooser<E, F>) => (array:Array<E>) => Array<F>
```

## Example
```ts
import * as ARRAY from 'fnxt/array';

const array = ARRAY.of(0, 1, 2, 3, 4);
const chooser = ARRAY.choose(
  (x: number) => x % 2 === 0
    ? Opt.Some(x * 2)
    : Opt.None
);
chooser(array) // -> [0, 4, 8]
```
