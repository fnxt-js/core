---
title: ARRAY.tryFindBack
description: tryFindBack
layout: ../../../../layouts/MainLayout.astro
---

Finds an `Option` of the last value of an array that satisfies the `predicate`. Returns `None` if no element is found.

## Type

```ts
type tryFindBack = <E>(predicate: ((e: E) => boolean)) => (a: Array<E>) => Option<E>
```

## Example

```ts
import {tryFindBack} from 'fnxt/array';

function isEven(num: number): boolean {
  return num % 2 === 0;
}

const array = [1, 2, 3, 4, 5];
const findEven = tryFindBack(isEven);
findEven(array) // -> Some(4)
```

## See Also

- [find](/core/en/array/operator/find)
- [findBack](/core/en/array/operator/findBack)
- [findIndex](/core/en/array/operator/findIndex)
- [findIndexBack](/core/en/array/operator/findIndexBack)
- [tryFind](/core/en/array/operator/tryFind)
- [tryFindIndex](/core/en/array/operator/tryFindIndex)
- [tryFindIndexBack](/core/en/array/operator/tryFindIndexBack)
