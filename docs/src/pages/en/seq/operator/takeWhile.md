---
title: SEQ.takeWhile
description: takeWhile
layout: ../../../../layouts/MainLayout.astro
---
Returns a sequence that contains all elements of the original sequence 
while the given `predicate` returns `true`, 
and then returns no further elements.
## Type
```ts
type takeWhile = <E>(predicate: Predicate<E>) => (seq: Seq<E>) => Seq<E>
```

## Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.range(0, 10, 1);
SEQ.takeWhile(lessThan(5))(seq) // -> {0, 1, 2, 3, 4};
```
