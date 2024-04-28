---
title: tryFindIndexBack
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

## See Also

- [find](../find)
- [findBack](../findBack)
- [findIndex](../findIndex)
- [findIndexBack](../findIndexBack)
- [tryFind](../tryFind)
- [tryFindBack](../tryFindBack)
- [tryFindIndex](../tryFindIndex)
