---
title: orElseWith
description: orElseWith
layout: ../../../layouts/MainLayout.astro
---

Returns option if option is `Some`, else the result alternative evaluates to.

## Type
```ts
type orElseWith = <T>(alternative: Thunk<Option<T>>) => (option: Option<T>) => Option<T>
```

## Examples
```ts
import {orElseWith, Some} from 'fnxt/option';

orElseWith(() => Some(1))(Some(2));  // -> Some(2)
orElseWith(() => Some(1))(None);     // -> Some(1)
orElseWith(() => None)(Some(1));     // -> Some(1)
orElseWith(() => None)(None);        // -> None
```


## See Also


- [defaultWith](/core/en/option/defaultWith)
- [defaultValue](/core/en/option/defaultValue)
- [orElse](/core/en/option/orElse)
