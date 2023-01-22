---
title: foldBack
description: foldBack
layout: ../../../layouts/MainLayout.astro
---

The original `state` if the option is `None`, otherwise it returns the updated `state` with the `folder` and the option `value`.

## Type
```ts
type foldBack = <T, S>(folder: Folder<T, S>) => (option: Option<T>) => (state: S) => S
```

## Examples
```ts
import {foldBack, Some} from 'fnxt/option';

const sum = foldBack((a:number, b:number) => a + b);
sum(Some(42))(1) // -> Some(43)
```

```ts
import {foldBack, None} from 'fnxt/option';

const sum = foldBack((a:number, b:number) => a + b);
sum(None)(1) // -> 1
```

## See Also

- [foldBackBack](/core/en/option/foldBackBack)
