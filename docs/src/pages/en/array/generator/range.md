---
title: Array.range
description: Array.range
layout: ../../../../layouts/MainLayout.astro
---
Builds an array with values in range between `from`(inclusive) and `to` (exclusive).
`step` is optional.

## Type

```ts
type range = (from: number, to: number, step: number = 1) => number[]
```

## Example

```ts
import {range} from 'fnxt/array';

range(1, 6, 2); // -> [1,3,5]
range(1, 4);  // -> [1,2,3]
```
