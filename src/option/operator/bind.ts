import {UnaryFunction} from '../../fnxt-types';
import {Option, OptionType} from '../option';

export const bind = <T, R>(fn: UnaryFunction<T, Option<R>>) => (
    o: Option<T>
): Option<R> => {
    switch (o.type) {
        case OptionType.None:
            return o;
        case OptionType.Some:
            return fn(o.value);
    }
};
