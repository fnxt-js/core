---
title: findBack
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
- [find](../find)
- [findIndex](../findIndex)
- [findIndexBack](../findIndexBack)
- [tryFind](../tryFind)
- [tryFindBack](../tryFindBack)
- [tryFindIndex](../tryFindIndex)
- [tryFindIndexBack](../tryFindIndexBack)
