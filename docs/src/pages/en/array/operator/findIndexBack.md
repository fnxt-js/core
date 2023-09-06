---
title: findIndexBack
description: findIndexBack
layout: ../../../../layouts/MainLayout.astro
---
Finds the `last` element in an `array` that satisfies a `predicate` function.

## Throws

- `Error`: If the `array` is `empty`.
- `Error`: If no element in the `array` satisfies the `predicate` function.

## Type

```ts
type findIndexBack = <E>(predicate: ((e: E) => boolean)) => (a: Array<E>) => number
```

## Example

```ts
import {findIndexBack} from 'fnxt/array';

function isEven(num: number): boolean {
  return num % 2 === 0;
}

const array = [1, 2, 3, 4, 5];
const lastEven = findIndexBack(isEven)(array);
// lastEven is 3
```

## See Also
- [find](./find)
- [findBack](./findBack)
- [findIndex](./findIndex)
- [tryFind](./tryFind)
- [tryFindBack](./tryFindBack)
- [tryFindIndex](./tryFindIndex)
- [tryFindIndexBack](./tryFindIndexBack)
