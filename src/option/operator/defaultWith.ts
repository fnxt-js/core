import {Option, OptionType} from '../option';

export const defaultWith = <T>(defThunk: () => T) => (o: Option<T>): T => {
  switch (o.type) {
    case OptionType.None:
      return defThunk();
    case OptionType.Some:
      return o.value;
  }
};
