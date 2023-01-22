---
title: map
description: map
layout: ../../../layouts/MainLayout.astro
---
If is `Some`, then maps the value of the `Option` to another value and returns a new `Option`.
If is `None`, then does nothing.
## Type
```ts
type map = <E,F>(e: UnaryFunction<E, F>) => (option:Option<E>) => Option<F>
```

## Examples
```ts
import {map, Some} from 'fnxt/option';

const plusOne = map((x: number) => x + 1);
plusOne(Some(42)) // -> Some(43)
```

```ts
import {map, None} from 'fnxt/option';

const plusOne = map((x: number) => x + 1);
plusOne(None) // -> None
```

## See Also

- [bind](/core/en/option/bind)
