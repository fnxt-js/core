---
title: tryFindIndex
description: tryFindIndex
layout: ../../../../layouts/MainLayout.astro
---

Finds an `Option` of `index` of `first` element in an `array` that satisfies a `predicate` function.
Returns `None` if no element is found.

## Type

```ts
type tryFindIndex = <E>(predicate: ((e: E) => boolean)) => (a: Array<E>) => Option<number>
```

## Example

```ts
import {tryFindIndex} from 'fnxt/array';

function isEven(num: number): boolean {
  return num % 2 === 0;
}

const array = [1, 2, 3, 4, 5];
const findEven = tryFindIndex(isEven);
findEven(array) // -> Some(1)
```

## See Also

- [find](./find)
- [findBack](./findBack)
- [findIndex](./findIndex)
- [findIndexBack](./findIndexBack)
- [tryFind](./tryFind)
- [tryFindBack](./tryFindBack)
- [tryFindIndexBack](./tryFindIndexBack)
