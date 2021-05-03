import {Option, OptionType} from '../option';

export const defaultValue = <T>(value: T) => (o: Option<T>): T => {
    switch (o.type) {
        case OptionType.None:
            return value;
        case OptionType.Some:
            return o.value;
    }
};
