---
title: Array.singleton
description: Array.singleton
layout: ../../../../layouts/MainLayout.astro
---
Builds an array of length 1. This funtion is intended to provide a functional way of converting a value into an array.

## Type

```ts
type singleton = <E>(value:E) => E[]
```

## Example

```ts
import {singleton} from 'fnxt/array';

singleton(1); // -> [1]
```
