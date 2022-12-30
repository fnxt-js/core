---
title: ARRAY.tryFindIndexBack
description: tryFindIndexBack
layout: ../../../../layouts/MainLayout.astro
---

Finds an `Option` of `index` of `last` element in an `array` that satisfies a `predicate` function.
Returns `None` if no element is found.

## Type

```ts
type tryFindIndexBack = <E>(predicate: ((e: E) => boolean)) => (a: Array<E>) => Option<number>
```

## Example

```ts
import {tryFindIndexBack} from 'fnxt/array';

function isEven(num: number): boolean {
  return num % 2 === 0;
}

const array = [1, 2, 3, 4, 5];
const findEven = tryFindIndexBack(isEven);
findEven(array) // -> Some(3)
```

- [find](/core/en/array/operator/find)
- [findBack](/core/en/array/operator/findBack)
- [findIndex](/core/en/array/operator/findIndex)
- [findIndexBack](/core/en/array/operator/findIndexBack)
- [tryFind](/core/en/array/operator/tryFind)
- [tryFindBack](/core/en/array/operator/tryFindBack)
- [tryFindIndex](/core/en/array/operator/tryFindIndex)
- [tryFindIndexBack](/core/en/array/operator/tryFindIndexBack)
