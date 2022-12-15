---
title: ARRAY.partition
description: partition
layout: ../../../../layouts/MainLayout.astro
---


Splits the collection into two collections, 
containing the elements for which the given predicate 
returns True and False respectively. 
Element order is preserved in both of the created lists.


## Type
```ts
type partition = <T>(predicate: Predicate<T>) => (array: T[]) => Tuple<T[], T[]>
```

## Example
```ts
import * as ARRAY from 'fnxt/array';

const array = [1, 2, 3, 4, 5, 6, 7];
const partition = ARRAY.partition(x => x < 4);
partition(array)// -> [[1, 2, 3], [4, 5, 6, 7]]
```

## See Also
- [chunkBySize](/core/en/array/operator/chunkBySize)
- [splitInto](/core/en/array/operator/splitInto)
