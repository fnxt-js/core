---
title: defaultValue
description: defaultValue
layout: ../../../layouts/MainLayout.astro
---
If is `Some`, then returns its `value`.
If is `None`, then returns the defaultValue.
## Type
```ts
type defaultValue = <T>(value: T) => (option: Option<T>) => T
```

## Examples
```ts
import {defaultValue, Some} from 'fnxt/option';

const getValue = defaultValue(0);
getValue(Some(42)) // -> 42
```

```ts
import {defaultValue, None} from 'fnxt/option';

const getValue = defaultValue(0);
getValue(None) // -> 0
```

## See Also


- [defaultWith](/core/en/option/defaultWith)
- [orElse](/core/en/option/orElse)
- [orElseWith](/core/en/option/orElseWith)
