---
title: maxBy
description: maxBy
layout: ../../../../layouts/MainLayout.astro
---
Maps each value of an array to a numeric value and returns the value with the highest value.

## Type

```ts
type maxBy = <E>(e: UnaryFunction<E, number>) => (array: Array<E>) => E
```

## Example

```ts
import * as ARRAY from 'fnxt/array';

const array = ['aa', 'bbb', 'c', 'dd'];
const maxBy = ARRAY.maxBy((x: string) => x.length);
maxBy(array) // -> 'bbb'
```
