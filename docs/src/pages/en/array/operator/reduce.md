---
title: reduce
description: reduce
layout: ../../../../layouts/MainLayout.astro
---

Reduces the array to a single value. `reducer` is used to fold the values.
Consumes the whole array before returning a value.

Uses the first value of the array as initial value.

Throws an `Error` if list is empty.

## Type

```ts
type reduce = <E>(reducer: (e: E, f: E) => E) => (array: Array<E>) => E
```

## Example

```ts
import {reduce} from 'fnxt/array';

const array = [1, 2, 3, 4];
const reduce = reduce((a: number, b: number) => a + b);
reduce(array) // -> 10
```


## See Also
- [fold](./fold)