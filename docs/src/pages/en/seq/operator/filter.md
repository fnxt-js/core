---
title: SEQ.filter
description: filter
layout: ../../../../layouts/MainLayout.astro
---
Filter values of a sequence with a predicate and returns a new sequence.

## Type
```ts
type filter = <E>(fn:((e:E) => boolean)) => (s:Seq<E>) => Seq<E>
```

## Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(0, 1, 2);
const isEven = SEQ.filter((x: number) => x % 2 == 0);
isEven(seq) // -> {0, 2}
```
