---
title: bind
description: bind
layout: ../../../layouts/MainLayout.astro
---
If is `Some`, then binds the value of the `Option` to another `Option`.
If is `None`, then does nothing.
## Type
```ts
type bind = <E,F>(e: UnaryFunction<E, F>) => (option:Option<E>) => Option<F>
```

## Examples
```ts
import {bind, Some} from 'fnxt/option';

const plusOne = bind((x: number) => Some(x + 1));
plusOne(Some(42)) // -> Some(43)
```

```ts
import {bind, None} from 'fnxt/option';

const plusOne = bind((x: number) => x + 1);
plusOne(None) // -> None
```

## See Also

- [map](/core/en/option/map)
- [flatten](/core/en/option/flatten)
