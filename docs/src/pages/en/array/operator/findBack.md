---
title: ARRAY.findBack
description: findBack
layout: ../../../../layouts/MainLayout.astro
---
Finds the `last` element in an `array` that satisfies a `predicate` function.

## Throws

- `Error`: If the `array` is `empty`.
- `Error`: If no element in the `array` satisfies the `predicate` function.

## Type

```ts
type findBack = <E>(predicate: ((e: E) => boolean)) => (a: Array<E>) => E
```

## Example

```ts
import {findBack} from 'fnxt/array';

function isEven(num: number): boolean {
  return num % 2 === 0;
}

const array = [1, 2, 3, 4, 5];
const lastEven = findBack(isEven)(array);
// lastEven is 4
```

## See Also
- [find](/core/en/array/operator/find)
- [findIndex](/core/en/array/operator/findIndex)
- [findIndexBack](/core/en/array/operator/findIndexBack)
- [tryFind](/core/en/array/operator/tryFind)
- [tryFindBack](/core/en/array/operator/tryFindBack)
- [tryFindIndex](/core/en/array/operator/tryFindIndex)
- [tryFindIndexBack](/core/en/array/operator/tryFindIndexBack)
