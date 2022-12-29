---
description: Docs intro
layout: ../../layouts/MainLayout.astro
---
# <img src="/FN.svg" width="86" height="86" alt="FnXt Logo"> FNXT: Functional Extensions for JavaScript


- 🚀 a functional JavaScript and TypeScript experience.
- 🤗 does not mutate values
- 🍎 a small footprint through tree shaking


## Installation
```shell
npm i fnxt
```

## Documentation

The API Documentation can be found [here](https://fnxt-js.github.io/core/en/introduction/).


## Example

```ts
import {filter, map} from 'fnxt/array';
import {pipe} from 'fnxt/pipe';

const composed = pipe(
  filter((x:number) => x % 2 !== 0),
  map((x:number) => x*2),
);

composed([1,2,3,4,5]); //-> [2,6,10]
```

## Tested

Thoroughly tested and reliable.
The code coverage can be found [here](https://fnxt-js.github.io/core/coverage.html).

