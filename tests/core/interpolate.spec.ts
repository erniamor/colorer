import 'mocha';
import { assert } from 'chai';

import interpolate from '../../src/core/interpolate';
import SCENARIOS from './interpolate.scenarios';

describe('interpolate Function', () => {
  it('should be a function', () => {
    assert.isFunction(interpolate);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return "${JSON.stringify(scenario.output)}" for start "${JSON.stringify(scenario.input.start)}" and end "${JSON.stringify(scenario.input.end)}" end and factor "${scenario.input.factor}"`, () => {
      const expected = scenario.output;
      const actual = interpolate(scenario.input.start, scenario.input.end, scenario.input.factor);
      assert.deepEqual(actual, expected);
    });
  }
});
