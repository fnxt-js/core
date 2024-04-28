---
title: take
description: take
layout: ../../../../layouts/MainLayout.astro
---

Returns the first N elements of the array.

## Type

```ts
type take = (count: number) => <E>(array: Array<E>) => Array<E>
```

## Example

```ts
import {take} from 'fnxt/array';

const array = [0, 1, 2, 3, 4];
const result = take(2)(array);

console.log(result);
// Output: [0, 1]
```

## See Also
- [skip](../skip)
- [skipWhile](../skipWhile)
- [takeWhile](../takeWhile)
- [truncate](../truncate)
- [filter](../filter)