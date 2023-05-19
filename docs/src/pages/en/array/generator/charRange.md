---
title: Array.charRange
description: Array.charRange
layout: ../../../../layouts/MainLayout.astro
---
Builds an array with values in range between `from`(inclusive) and `to` (inclusive).
`step` is optional.

## Type

```ts
type charRange = (from: string, to: string, step: number = 1) => string[]
```

## Example

```ts
import {charRange} from 'fnxt/array';

charRange('A', 'F'); // -> ['A','B','C','D','E','F']
charRange('F', 'A', 2);  // -> ['F','D','B']
```
