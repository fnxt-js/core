### SEQ.reduce
Reduces the sequence to a single value. `reducer` is used to fold the values. 
Consumes the whole sequence before returning a value.

Throws an `Error` if list is empty.


#### Type
```ts
type reduceT = <E>(reducer: (e: E, f: E) => E) => (seq: Seq<E>)=> E
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(1, 2, 3, 4);
const reduce = SEQ.reduce((a:number, b:number) => a+b);
reduce(seq) // -> 10
```
 
