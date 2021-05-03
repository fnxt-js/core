import {UnaryFunction} from '../../types/types';
import {Option, OptionType, Some} from '../option';

export const map = <T, R>(fn: UnaryFunction<T, R>) => (o: Option<T>): Option<R> => {
    switch (o.type) {
        case OptionType.None:
            return o;
        case OptionType.Some:
            return Some(fn(o.value));
    }
};
