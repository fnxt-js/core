---
title: toSeq
description: toSeq
layout: ../../../layouts/MainLayout.astro
---

If option is `Some`, returns a sequence with value as single value, otherwise returns empty sequence.

## Type
```ts
type toSeq = <T>(option: Option<T>) => Seq<T>
```

## Examples
```ts
import {toSeq, Some} from 'fnxt/option';

toSeq(Some(1));   // -> {1}
toSeq(None);      // -> {}
```


## See Also


- [toSeq](/core/en/option/toSeq)
