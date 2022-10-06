import 'mocha';
import { assert } from 'chai';

import { rainbow } from '../../src/core/rainbow';
import SCENARIOS from './rainbow.scenarios';

describe('rainbow Function', () => {
  it('should be a function', () => {
    assert.isFunction(rainbow);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return Colors "${JSON.stringify(scenario.output)}" for numOfSteps "${scenario.input.numOfSteps}"`, () => {
      const expected = scenario.output;
      const actual = rainbow(scenario.input.numOfSteps);
      assert.deepEqual(actual, expected);
    });
  }
});
