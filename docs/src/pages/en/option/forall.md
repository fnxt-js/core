---
title: forall
description: forall
layout: ../../../layouts/MainLayout.astro
---

Returns `false` if the `option` is `None`, otherwise it returns the result of applying the `predicate` to the option `value`.

## Type
```ts
type forall = <T>(predicate: Predicate<T>) => (option: Option<T>) => boolean
```

## Examples
```ts
import {forall, Some, None} from 'fnxt/option';

const some = forall((x:number)=> x > 5);
some(Some(42))  // -> true
some(Some(0))   // -> false
some(None)      // -> true
```

## See Also

- [exists](/core/en/option/exists)
