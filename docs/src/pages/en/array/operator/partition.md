---
title: partition
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

## Examples


```ts
import {partition} from 'fnxt/array';

const partitionSmall = partition(x => x < 4);
const result = partitionSmall([1, 2, 3, 4, 5, 6, 7])

console.log(result);
// Output: [[1, 2, 3], [4, 5, 6, 7]]
```

```ts
import {partition} from 'fnxt/array';

const isLongWord = (x: string) => x.length >= 5;
const partitionLongShort = partition(isLongWord);
const result = partitionLongShort(['hello', 'world', 'foo', 'bar']);

console.log(result);
// Output: [['hello', 'world'], ['foo', 'bar']]
```

```ts
import {partition} from 'fnxt/array';

const isEven = (x: number) => x % 2 === 0;
const partitionEvenOdd = partition(isEven);
const result = partitionEvenOdd([1, 2, 3, 4, 5]);

console.log(result);
// Output: [[2, 4], [1, 3, 5]]
```

## See Also

- [chunkBySize](../chunkBySize)
- [filter](../filter)
- [splitInto](../splitInto)
