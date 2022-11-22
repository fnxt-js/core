---
title: SEQ.empty
description: empty
layout: ../../../../layouts/MainLayout.astro
---

An empty sequence.

## Type
```ts
type chooseT = Seq<never>
```

## Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.empty;  // -> {}
```
