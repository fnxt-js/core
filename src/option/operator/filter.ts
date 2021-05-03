import {Predicate} from '../../types/types';
import {None, Option, OptionType} from '../option';

export const filter = <T>(predicate: Predicate<T>) => (
    o: Option<T>
): Option<T> => {
    switch (o.type) {
        case OptionType.None:
            return o;
        case OptionType.Some:
            return predicate(o.value) ? o : None;
    }
};
