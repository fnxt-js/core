---
title: ARRAY.find
description: find
layout: ../../../../layouts/MainLayout.astro
---
Finds the `first` element in an `array` that satisfies a `predicate` function.

## Throws

- `Error`: If the `array` is `empty`.
- `Error`: If no element in the `array` satisfies the `predicate` function.

## Type

```ts
type find = <E>(predicate: ((e: E) => boolean)) => (a: Array<E>) => E
```

## Example

```ts
import {find} from 'fnxt/array';

function isEven(num: number): boolean {
  return num % 2 === 0;
}

const array = [1, 2, 3, 4, 5];
const findEven = find(isEven);
findEven(array) // -> 2
```

## See Also

- [findBack](/core/en/array/operator/findBack)
- [findIndex](/core/en/array/operator/findIndex)
- [findIndexBack](/core/en/array/operator/findIndexBack)
- [tryFind](/core/en/array/operator/tryFind)
- [tryFindBack](/core/en/array/operator/tryFindBack)
- [tryFindIndex](/core/en/array/operator/tryFindIndex)
- [tryFindIndexBack](/core/en/array/operator/tryFindIndexBack)
