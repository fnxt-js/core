---
title: minBy
description: minBy
layout: ../../../../layouts/MainLayout.astro
---

Maps each value of an array to a numeric value and returns the value with the highest value.

## Type

```ts
type minBy = <E>(e: UnaryFunction<E, number>) => (array: Array<E>) => E
```

## Example

```ts
import {minBy} from 'fnxt/array';

const array = ['aa', 'bbb', 'c', 'dd'];
const minBy = minBy((x: string) => x.length);
minBy(array) // -> 'c'
```
 
