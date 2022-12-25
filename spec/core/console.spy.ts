import * as sinon from 'sinon';

import {Logger} from '../../src/internal/logger';

export const consoleWarnSpy = ()=>sinon.stub(Logger, 'warn');
