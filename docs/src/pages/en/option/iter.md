---
title: iter
description: iter
layout: ../../../layouts/MainLayout.astro
---

If option is `Some` applies the action on option value, otherwise, does nothing.

## Type

```ts
type iter = <T>(action: Consumer<T>) => (option: Option<T>) => Option<T>
```

## Examples
```ts
import {iter, Some, None} from 'fnxt/option';

const log = iter((x:number)=> console.log(x));
log(Some(42))  // -> prints 42
log(None)      // -> does nothing
```
