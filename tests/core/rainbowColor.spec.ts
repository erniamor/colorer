import 'mocha';
import { assert } from 'chai';

import { rainbowColor } from '../../src/core/rainbowColor';
import SCENARIOS from './rainbowColor.scenarios';

describe('rainbowColor Function', () => {
  it('should be a function', () => {
    assert.isFunction(rainbowColor);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return Color "${JSON.stringify(scenario.output)}" for numOfSteps "${scenario.input.numOfSteps}" and step "${scenario.input.step}"`, () => {
      const expected = scenario.output;
      const actual = rainbowColor(scenario.input.numOfSteps, scenario.input.step);
      assert.deepEqual(actual, expected);
    });
  }
});
