import {None, Option, OptionType} from '../option';
import {Predicate} from '../../fnxt-types';

export const exists = <T>(predicate: Predicate<T>) => (
    o: Option<T>
): boolean => {
    switch (o.type) {
        case OptionType.None:
            return false;
        case OptionType.Some:
            return predicate(o.value);
    }
};
