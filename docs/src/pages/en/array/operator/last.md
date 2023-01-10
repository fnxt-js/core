---
title: last
description: last
layout: ../../../../layouts/MainLayout.astro
---
Returns the last value of an array. Consumes the array before returning.
Throws an Error if the array is empty.
Does not terminate on infinite arrays.

## Type

```ts
type last = <E>(s: Array<E>) => E
```

## Example

```ts
import * as ARRAY from 'fnxt/array';

const array = [2, 3, 4];
const last = ARRAY.last;
last(array) // -> 4
```

## See Also
- [head](/core/en/array/operator/head)
- [tail](/core/en/array/operator/tail)
- [init](/core/en/array/operator/init)

```
|  head  |              tail              |
|---[0]-----[1]-----[2]-----[3]-----[4]---|
|              init              |  last  |
```
