import 'mocha';
import { assert } from 'chai';

import { fromHex } from '../../src/core/fromHex';
import SCENARIOS from './fromHex.scenarios';

describe('fromHex Function', () => {
  it('should be a function', () => {
    assert.isFunction(fromHex);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return Color "${JSON.stringify(scenario.output)}" for Hex "${scenario.input}"`, () => {
      const expected = scenario.output;
      const actual = fromHex(scenario.input);
      assert.deepEqual(actual, expected);
    });
  }
});
