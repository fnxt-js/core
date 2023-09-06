---
title: map
description: map
layout: ../../../../layouts/MainLayout.astro
---
Maps each value of an array to another value and returns a new array.

## Type

```ts
type map = <E, F>(e: UnaryFunction<E, F>) => (a: Array<E>) => Array<R>
```

## Example

```ts
import {map} from 'fnxt/array';

const array = [0, 1, 2];
const plusOne = map((x: number) => x + 1);
plusOne(array) // -> [2, 3, 4]
```

## See Also
- [collect](/core/en/array/operator/collect)