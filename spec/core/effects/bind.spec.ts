import {Result, Success, map, bind, Failure} from '../../../src/result';
import {pipe} from '../../../src/pipe';
import {mapAff} from '../../../src/effects/operator/mapAff';
import {bindAff} from '../../../src/effects/operator/bindAff';
import {ofSync, ofAsync, Aff} from '../../../src/effects/effect';
import {mapMany} from '../../../src/effects/operator/dev';

describe('bind', () => {
  it('should bind Some', async () => {
    const successType = Success(1);
    const seed = ofAsync<number, string>(async () => successType);

    const res = pipe(
        mapAff((r: number) => r + 1),
        bindAff((r: number) => ofAsync(() => Promise.resolve(Success(r + r)))),
        mapAff((r: number) => r + 1),
    )(seed);


    const xx: Result<number, string> = Failure('e');

    const res2 = pipe(
        map((e: number) => e),
        bind((e: number) => Success(e + 1))
    )(xx);

    if (res2.type === 'Success') {
      const x = res2.value;
    }

    const val = await res.thunk();
    const xaaaa = val;

    const eff = ofSync(() => Success(1));
    const res3 = mapMany((e1: number, e2: number) => e1)(eff, eff);
    const res1 = mapMany((e1: number, e2: number) => e1)(eff, eff);

  });


});
