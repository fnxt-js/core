---
title: SEQ.every
description: every
layout: ../../../../layouts/MainLayout.astro
---
The `predicate` is applied to the elements of the input sequence. 
If any application returns `false` then the overall result is `false` 
and no further elements are tested. 
Otherwise, `true` is returned.

## Type
```ts
type every = <E>(predicate:((e:E) => boolean)) => (s:Seq<E>) => boolean
```

## Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(0, 1, 2);
const every = SEQ.every((x: number) => x % 2 == 0);
every(seq) // -> false
```
