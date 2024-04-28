---
title: takeWhile
description: takeWhile
layout: ../../../../layouts/MainLayout.astro
---
Returns an array that contains all elements of the original array
while the given `predicate` returns `true`,
and then returns no further elements.

## Type

```ts
type takeWhile = <E>(predicate: Predicate<E>) => (array: Array<E>) => Array<E>
```

## Example

```ts
import {takeWhile} from 'fnxt/array';

const array = [0, 1, 2, 3, 4, 5];
const result = takeWhile(lessThan(3))(array);

console.log(result);
// Output: [0, 1, 2]
```

## See Also
- [skip](../skip)
- [skipWhile](../skipWhile)
- [take](../take)
- [truncate](../truncate)
- [filter](../filter)