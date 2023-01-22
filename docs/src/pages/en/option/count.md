---
title: count
description: count
layout: ../../../layouts/MainLayout.astro
---
If is `Some`, returns `1`.
If is `None`, returns `0`.
## Type
```ts
type count = <E>(option:Option<E>) => 0|1
```

## Examples
```ts
import {count, Some} from 'fnxt/option';

count(Some(42)) // -> 1
```

```ts
import {count, None} from 'fnxt/option';

count(None) // -> 0
```
