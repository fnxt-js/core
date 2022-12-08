---
title: ARRAY.collect
description: collect
layout: ../../../../layouts/MainLayout.astro
---

Applies the given function to each element of the array and concatenates all the results.

## Type
```ts
type collect = <E, F>(mapping: (e: E) => Iterable<F>) => (array: Array<E>)=> Array<F>
```

## Example
```ts
const gen = [1, 2, 3,];
const mapping = (x: number) => [x, x + 1];
const collect = ARRAY.collect(mapping);
collect(gen)  // -> [1, 2, 2, 3, 3, 4];
```
