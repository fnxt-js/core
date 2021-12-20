import arraySpec from './array.spec';
import optionSpec from './option.spec';
import pipeSpec from './pipe.spec';
import resultSpec from './result.spec';

describe('ALL', () => {
    (() => arraySpec)();
    (() => optionSpec)();
    (() => pipeSpec)();
    (() => resultSpec)();
});
