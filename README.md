# FNXT 

- a library for JavaScript and TypeScript.
- focuses on a functional JavaScript and TypeScript experience.
- it does not mutate values

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
