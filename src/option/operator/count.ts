import {Option, OptionType} from '../option';

export const count = <T>(o: Option<T>): number => {
    switch (o.type) {
        case OptionType.None:
            return 0;
        case OptionType.Some:
            return 1;
    }
};
