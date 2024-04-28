---
title: fold
description: fold
layout: ../../../../layouts/MainLayout.astro
---

Folds the array to a single value. `folder` is used to fold the values.
Consumes the whole array before returning a value.

Takes an initial value.

Throws an `Error` if list is empty.

## Type

```ts
type fold = <E, F>(folder: (e: F, f: E) => F) => (initial: F) => (array: E[]) => F
```

## Example

```ts
import {fold} from 'fnxt/array';

const array = [1, 2, 3, 4];
const initial = 5
const fold = fold((a: number, b: number) => a + b)(initial);
fold(array) // -> 15
```


## See Also
- [reduce](../reduce)