---
title: Home
description: Docs intro
layout: ../../layouts/MainLayout.astro
---# FNXT: Functional Extensions for JavaScript

![CI](https://github.com/fnxt-js/core/workflows/CI/badge.svg)
[![npm version](https://badge.fury.io/js/fnxt.svg)](https://www.npmjs.com/package/fnxt)

<img class="img-inline" src="https://raw.githubusercontent.com/fnxt-js/core/main/docs/public/FN.svg" alt="FNXT Logo" width="86" height="86"> 


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

