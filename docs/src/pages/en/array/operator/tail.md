---
title: tail
description: tail
layout: ../../../../layouts/MainLayout.astro
---
Returns the list after removing the first element.

## Type

```ts
type tail = <E>(s: E[]) => E[]
```

## Example

```ts
import {tail} from 'fnxt/array';

tail([1, 2, 3, 4]) // -> [2, 3, 4]
```

## See Also
- [head](../head)
- [init](../init)
- [last](../last)

```
|  head  |              tail              |
|---[0]-----[1]-----[2]-----[3]-----[4]---|
|              init              |  last  |
```
