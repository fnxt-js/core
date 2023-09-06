---
title: filter
description: filter
layout: ../../../../layouts/MainLayout.astro
---
Filter values of an array with a predicate and returns a new array.

## Type

```ts
type filter = <E>(fn: ((e: E) => boolean)) => (a: Array<E>) => Array<E>
```

## Example

```ts
import {filter} from 'fnxt/array';

const array = [0, 1, 2];
const isEven = filter((x: number) => x % 2 == 0);
isEven(array) // -> [0, 2]
```

## See Also
- [skipWhile](./skipWhile)
- [takeWhile](./takeWhile)
- [partition](./partition)