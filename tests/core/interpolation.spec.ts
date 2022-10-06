import 'mocha';
import { assert } from 'chai';

import { interpolation } from '../../src/core/interpolation';
import SCENARIOS from './interpolation.scenarios';

describe('interpolation Function', () => {
  it('should be a function', () => {
    assert.isFunction(interpolation);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return "${JSON.stringify(scenario.output)}" for start "${JSON.stringify(scenario.input.start)}" and end "${JSON.stringify(scenario.input.end)}" end and steps "${scenario.input.steps}"`, () => {
      const expected = scenario.output;
      const actual = interpolation(scenario.input.start, scenario.input.end, scenario.input.steps);
      assert.deepEqual(actual, expected);
    });
  }
});
