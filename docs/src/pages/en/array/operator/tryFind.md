---
title: ARRAY.tryFind
description: tryFind
layout: ../../../../layouts/MainLayout.astro
---

Finds an `Option` of the first values of an array that satisfies the `predicate`. Returns `None` if no element is found. 

## Type
```ts
type tryFind= <E>(predicate:((e:E) => boolean)) => (a:Array<E>) => E | undefind
```

## Example
```ts
import * as ARRAY from 'fnxt/array';
const array = [0, 1, 2];
const findEven = ARRAY.tryFind((x: number) => x % 2 == 0);
findEven(array) // -> Some(0)
```
