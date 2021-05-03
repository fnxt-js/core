import {Chooser, OptionType} from '../../option/option';

const reduction = <E, F>(fn: Chooser<E, F>) => (p: F[], e: E): F[] => {
    const v = fn(e);
    if (v.type === OptionType.Some) p.push(v.value);
    return p;
};

export const choose = <E, F>(fn: Chooser<E, F>) => (
    array: Array<E>
): Array<F> => array.reduce(reduction(fn), []);
