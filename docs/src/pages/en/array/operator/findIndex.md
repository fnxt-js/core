---
title: findIndex
description: findIndex
layout: ../../../../layouts/MainLayout.astro
---
Finds the `index` of `first` element in an `array` that satisfies a `predicate` function.

## Throws

- `Error`: If the `array` is `empty`.
- `Error`: If no element in the `array` satisfies the `predicate` function.

## Type

```ts
type findIndex = <E>(predicate: ((e: E) => boolean)) => (a: Array<E>) => number
```

## Example

```ts
import {findIndex} from 'fnxt/array';

function isEven(num: number): boolean {
  return num % 2 === 0;
}

const array = [1, 2, 3, 4, 5];
const findEven = findIndex(isEven);
findEven(array) // -> 1
```

## See Also

- [find](/core/en/array/operator/find)
- [findBack](/core/en/array/operator/findBack)
- [findIndexBack](/core/en/array/operator/findIndexBack)
- [tryFind](/core/en/array/operator/tryFind)
- [tryFindBack](/core/en/array/operator/tryFindBack)
- [tryFindIndex](/core/en/array/operator/tryFindIndex)
- [tryFindIndexBack](/core/en/array/operator/tryFindIndexBack)
