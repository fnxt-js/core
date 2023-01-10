---
title: init
description: init
layout: ../../../../layouts/MainLayout.astro
---
Returns the list after removing the last element.

## Type

```ts
type init = <E>(s: E[]) => E[]
```

## Example

```ts
import {init} from 'fnxt/array';

init([1, 2, 3, 4]) // -> [1, 2, 3]
```

## See Also

- [head](/core/en/array/operator/head)
- [tail](/core/en/array/operator/tail)
- [last](/core/en/array/operator/last)

```
|  head  |              tail              |
|---[0]-----[1]-----[2]-----[3]-----[4]---|
|              init              |  last  |
```
