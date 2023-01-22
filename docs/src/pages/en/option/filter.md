---
title: filter
description: filter
layout: ../../../layouts/MainLayout.astro
---

Returns the `option` if the predicate `evaluates` to `true`; otherwise, `None`.
Always returns `None` id option is `None`.

## Type
```ts
type filter = <T>(predicate: Predicate<T>) => (option: Option<T>) => boolean
```

## Examples
```ts
import {filter, Some, None} from 'fnxt/option';

const filterGreaterFive = filter((x:number)=> x > 5);
filterGreaterFive(Some(42))  // -> Some(42)
filterGreaterFive(Some(0))   // -> None
filterGreaterFive(None)      // -> None
```


## See Also
- [forall](/core/en/option/forall)
- [exists](/core/en/option/exists)
