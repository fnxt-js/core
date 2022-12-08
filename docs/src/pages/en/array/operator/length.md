---
title: ARRAY.length
description: length
layout: ../../../../layouts/MainLayout.astro
---
Returns the length of an array. Consumes the array before returning.
Returns `0` if the array is empty.
Does not terminate on infinite arrays.
## Type
```ts
type length = <E>(s:Array<E>) => number
```

## Example
```ts
import * as ARRAY from 'fnxt/array';
const array = [2, 3, 4];
const length = ARRAY.length;
length(array) // -> 3
```
