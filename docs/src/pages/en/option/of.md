---
title: of
description: of
layout: ../../../layouts/MainLayout.astro
---

Returns `None` if value is `null` or `undefined`, otherwise, `Some(value)` .

## Type

```ts
type of = <T>(value: MaybeNullish<T>) => Option<T>
```

## Examples
```ts
import {of, Some, None} from 'fnxt/option';

of(42)         // -> Some(42)
of(null)       // -> None
of(undefined)  // -> None
```
