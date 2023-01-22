---
title: toArray
description: toArray
layout: ../../../layouts/MainLayout.astro
---

If option is `Some`, returns an array with value as single value, otherwise returns empty array.

## Type
```ts
type toArray = <T>(option: Option<T>) => [] | [T] 
```

## Examples
```ts
import {toArray, Some} from 'fnxt/option';

toArray(Some(1));   // -> [1]
toArray(None);      // -> []
```


## See Also


- [toSeq](/core/en/option/toSeq)
