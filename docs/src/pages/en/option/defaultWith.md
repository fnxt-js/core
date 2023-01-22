---
title: defaultWith
description: defaultWith
layout: ../../../layouts/MainLayout.astro
---
If is `Some`, then returns its `value`.
If is `None`, then returns the value returned by the `defaultThunk`.
## Type
```ts
type defaultWith = <T>(defThunk: () => T) => (option: Option<T>) => T
```

## Examples
```ts
import {defaultWith, Some} from 'fnxt/option';

const getValue = defaultWith(()=>0);
getValue(Some(42)) // -> 42
```

```ts
import {defaultWith, None} from 'fnxt/option';

const getValue = defaultWith(()=>0);
getValue(None) // -> 0
```

## See Also


- [defaultValue](/core/en/option/defaultValue)
- [orElse](/core/en/option/orElse)
- [orElseWith](/core/en/option/orElseWith)
