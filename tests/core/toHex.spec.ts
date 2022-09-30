import 'mocha';
import { assert } from 'chai';

import toHex from '../../src/core/toHex';
import SCENARIOS from './toHex.scenarios';

describe('toHex Function', () => {
  it('should be a function', () => {
    assert.isFunction(toHex);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return Hex "${scenario.output}" for Color "${JSON.stringify(scenario.input)}"`, () => {
      const expected = scenario.output;
      const actual = toHex(scenario.input);
      assert.equal(actual, expected);
    });
  }
});
