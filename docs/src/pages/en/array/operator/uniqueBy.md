---
title: uniqueBy
description: uniqueBy
layout: ../../../../layouts/MainLayout.astro
---

Takes an array of elements and a projection function and returns a new array that only contains the unique elements, based on the projection function.

## Parameters

- A `projection` function that takes an element of type `E` and returns a value of either type `number` or `string`. 
This function is used to determine the uniqueness of the elements.
- An `array` of elements to be transformed.


## Returns

- A new array that contains only the first occurrence of each unique element, based on the projection function.

## Type

```ts
type uniqueBy = <E>(projection: KeyProjection<E>) => (array: E[])=> E[]
```

## Example

```typescript
import { uniqueBy } from 'fnxt/array';

const array = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const uniqueById = uniqueBy((item) => item.id);
console.log(uniqueById(array));
// Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]

const uniqueByName = uniqueBy((item) => item.name);
console.log(uniqueByName(array));
// Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]
```
