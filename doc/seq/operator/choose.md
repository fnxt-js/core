### SEQ.choose
Applies a function to each element in a sequence and then returns a sequence of values v where 
the applied function returned Some(v). Returns an empty sequence when the input sequence is empty 
or when the applied chooser function returns None for all elements.

#### Type
```ts
type chooseT = <E,F>(e: Chooser<E, F>) => (seq:Seq<E>) => Seq<F>
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';

const seq = SEQ.of(0, 1, 2, 3, 4);
const chooser = SEQ.choose(
  (x: number) => x % 2 === 0
    ? Opt.Some(x * 2)
    : Opt.None
);
chooser(seq) // -> {0, 4, 8}
```
