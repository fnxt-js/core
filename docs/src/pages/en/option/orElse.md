---
title: orElse
description: orElse
layout: ../../../layouts/MainLayout.astro
---

Returns option if option is `Some`, else the alternative.

## Type
```ts
type orElse = <T>(alternative: Option<T>) => (option: Option<T>) => Option<T>
```

## Examples
```ts
import {orElse, Some} from 'fnxt/option';

orElse(Some(1))(Some(2));  // -> Some(2)
orElse(Some(1))(None);     // -> Some(1)
orElse(None)(Some(1));     // -> Some(1)
orElse(None)(None);        // -> None
```


## See Also

- [defaultValue](/core/en/option/defaultValue)
- [orElseWith](/core/en/option/orElseWith)
- [defaultWith](/core/en/option/defaultWith)
