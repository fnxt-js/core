---
title: ARRAY.partition
description: partition
layout: ../../../../layouts/MainLayout.astro
---


Splits the collection into two collections,
containing the elements for which the given predicate
returns True and False respectively.
Element order is preserved in both of the created lists.

## Returns

A function that takes an array of elements of type T as an
argument and returns a tuple of two arrays of elements of
type T. The first array in the tuple contains the
elements of the input array that satisfy the predicate
function, and the second array contains the
elements that do not satisfy the predicate.

## Type

```ts
type partition = <T>(predicate: ((item: T) => boolean)) => (array: T[]) => [T[], T[]]
```

## Example

```ts
import {partition} from 'fnxt/array';
```

```ts
const smallValues = partition(x => x < 4);
smallValues([1, 2, 3, 4, 5, 6, 7])// -> [[1, 2, 3], [4, 5, 6, 7]]
```

```ts
const isLongWord = (x: string) => x.length > 5;
const splitLongShortWords = partition<string>(isLongWord);
const result = splitLongShortWords(['hello', 'world', 'foo', 'bar']);
// result is [ ['hello', 'world'], ['foo', 'bar'] ]
```

```ts

const isEven = (x: number) => x % 2 === 0;
const splitEvenOdd = partition<number>(isEven);
const result = splitEvenOdd([1, 2, 3, 4, 5]);
// result is [ [2, 4], [1, 3, 5] ]
```

## See Also

- [chunkBySize](/core/en/array/operator/chunkBySize)
- [splitInto](/core/en/array/operator/splitInto)
