---
title: SEQ.infinite
description: infinite
layout: ../../../../layouts/MainLayout.astro
---
A infinite sequence. Does not stop to give values unless used with truncating functions.
See: `head`,`take`,`takeWhile`

## Type
```ts
type infinite = (start:number,step:number=1)=>Seq<number>
```

## Example
```ts
import * as SEQ from 'fnxt/seq';

const seq1 = SEQ.infinite(1,1);  // -> {1,2,3,...}
const seq2 = SEQ.infinite(1,2);  // -> {1,3,5,...}
```

