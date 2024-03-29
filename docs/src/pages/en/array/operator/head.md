---
title: head
description: head
layout: ../../../../layouts/MainLayout.astro
---
Returns the first value of an array.
Throws an Error if the array is empty.

## Type

```ts
type head = <E>(s: Array<E>) => E
```

## Example

```ts
import {head} from 'fnxt/array';

const array = [2, 3, 4];
head(array) // -> 2
```

## See Also

- [tail](./tail)
- [init](./init)
- [last](./last)

```
|  head  |              tail              |
|---[0]-----[1]-----[2]-----[3]-----[4]---|
|              init              |  last  |
```
