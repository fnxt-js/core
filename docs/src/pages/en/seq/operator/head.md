---
title: SEQ.head
description: head
layout: ../../../../layouts/MainLayout.astro
---
Returns the first value of a sequence.
Throws an Error if the sequence is empty.
## Type
```ts
type head = <E>(s:Seq<E>) => E
```

## Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(2, 3, 4);
const head = SEQ.head;
head(seq) // -> 2
```
