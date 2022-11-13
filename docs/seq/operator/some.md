### SEQ.some
The `predicate` is applied to the elements of the input sequence. 
If any application returns `true` then the overall result is `true` 
and no further elements are tested. 
Otherwise, `false` is returned.

#### Type
```ts
type some = <E>(predicate:((e:E) => boolean)) => (s:Seq<E>) => boolean
```

#### Example
```ts
import * as SEQ from 'fnxt/seq';
const seq = SEQ.of(0, 1, 2);
const some = SEQ.some((x: number) => x % 2 == 0);
some(seq) // -> false
```
