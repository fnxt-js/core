### SEQ.collect
Applies the given function to each element of the sequence and concatenates all the results.

#### Type
```
collect = <E, F>(mapping: (e: E) => Iterable<F>) => (seq: Seq<E>): Seq<F>
```

#### Example
```ts
const gen = SEQ.of(1, 2, 3,);
const mapping = (x: number) => [x, x + 1];
const collect = SEQ.collect(mapping);
collect(gen)  // -> {1, 2, 2, 3, 3, 4};
```
