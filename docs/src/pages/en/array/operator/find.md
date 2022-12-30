---
title: ARRAY.find
description: find
layout: ../../../../layouts/MainLayout.astro
---
Finds the first values of an array that satisfies the `predicate`.

## Throws

- `Error`: If the `array` is `empty`.
- `Error`: If no element in the `array` satisfies the `predicate` function.

## Type

```ts
type find = <E>(predicate: ((e: E) => boolean)) => (a: Array<E>) => E | undefind
```

## Example

```ts
import * as ARRAY from 'fnxt/array';

const array = [1, 2, 3, 4, 5];
const findEven = ARRAY.find((x: number) => x % 2 == 0);
findEven(array) // -> 2
```
