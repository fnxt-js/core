---
title: exists
description: exists
layout: ../../../layouts/MainLayout.astro
---

Returns `false` if the `option` is `None`, otherwise it returns the result of applying the `predicate` to the option `value`.

## Type
```ts
type exists = <T>(predicate: Predicate<T>) => (option: Option<T>) => boolean
```

## Examples
```ts
import {exists, Some, None} from 'fnxt/option';

const some = exists((x:number)=> x > 5);
some(Some(42))  // -> true
some(Some(0))   // -> false
some(None)      // -> false
```

## See Also

- [forall](/core/en/option/forall)
- [find](/core/en/option/find)
