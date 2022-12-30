---
title: ARRAY.tryFind
description: tryFind
layout: ../../../../layouts/MainLayout.astro
---

Finds an `Option` of the first value of an array that satisfies the `predicate`. Returns `None` if no element is found.

## Type

```ts
type tryFind = <E>(predicate: ((e: E) => boolean)) => (a: Array<E>) => Option<E>
```

## Example

```ts
import {tryFind} from 'fnxt/array';

function isEven(num: number): boolean {
  return num % 2 === 0;
}

const array = [1, 2, 3, 4, 5];
const findEven = tryFind(isEven);
findEven(array) // -> Some(2)
```

- [find](/core/en/array/operator/find)
- [findBack](/core/en/array/operator/findBack)
- [findIndex](/core/en/array/operator/findIndex)
- [findIndexBack](/core/en/array/operator/findIndexBack)
- [tryFind](/core/en/array/operator/tryFind)
- [tryFindBack](/core/en/array/operator/tryFindBack)
- [tryFindIndex](/core/en/array/operator/tryFindIndex)
- [tryFindIndexBack](/core/en/array/operator/tryFindIndexBack)
