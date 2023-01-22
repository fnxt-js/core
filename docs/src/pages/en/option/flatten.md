---
title: flatten
description: flatten
layout: ../../../layouts/MainLayout.astro
---

Returns the input `value` if the value is `Some`; otherwise, `None`.

## Type
```ts
type flatten = <T>(option: Option<Option<T>>) => Option<T>
```

## Examples
```ts
import {flatten, Some, None} from 'fnxt/option';

flatten(Some(Some(42))) // -> Some(42)
flatten(Some(None))     // -> None
flatten(None)           // -> None
```


## See Also
- [bind](/core/en/option/bind)
