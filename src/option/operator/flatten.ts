import {None, Option, OptionType} from '../option';

export const flatten = <T>(o: Option<Option<T>>): Option<T> => {
    switch (o.type) {
        case OptionType.None:
            return None;
        case OptionType.Some:
            return o.value;
    }
};
