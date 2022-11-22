---
title: SEQ.range
description: range
layout: ../../../../layouts/MainLayout.astro
---
A sequence in a range.

## Type
```ts
type range = (from:number,to:number,step:number=1)=>Seq<number>
```

## Example
```ts
import * as SEQ from 'fnxt/seq';

const seq1 = SEQ.range(1,6,2); // -> {1,3,5}
const seq2 = SEQ.range(1,4);  // -> {1,2,3}
```
