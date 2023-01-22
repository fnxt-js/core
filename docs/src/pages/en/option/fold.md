---
title: fold
description: fold
layout: ../../../layouts/MainLayout.astro
---

The original `state` if the option is `None`, otherwise it returns the updated `state` with the `folder` and the option `value`.


## Type
```ts
type fold = <T, S>(folder: Folder<T, S>) => (state: S) => (option: Option<T>) => S
```

## Examples
```ts
import {fold, Some} from 'fnxt/option';

const sum = fold((a:number, b:number) => a + b);
sum(1)(Some(42)) // -> Some(43)
```

```ts
import {fold, None} from 'fnxt/option';

const sum = fold((a:number, b:number) => a + b);
sum(1)(None) // -> 1
```

## See Also

- [foldBack](/core/en/option/foldBack)
