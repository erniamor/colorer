import 'mocha';
import { assert } from 'chai';

import { fromRgb } from '../../src/core/fromRgb';
import SCENARIOS from './fromRgb.scenarios';

describe('fromRgb Function', () => {
  it('should be a function', () => {
    assert.isFunction(fromRgb);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return Color "${JSON.stringify(scenario.output)}" for Hex "${scenario.input}"`, () => {
      const expected = scenario.output;
      const actual = fromRgb(scenario.input);
      assert.deepEqual(actual, expected);
    });
  }
});
