import 'mocha';
import { assert } from 'chai';

import toRgb from '../../src/core/toRgb';
import SCENARIOS from './toRgb.scenarios';

describe('toRgb Function', () => {
  it('should be a function', () => {
    assert.isFunction(toRgb);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return Rgb "${scenario.output}" for Color "${JSON.stringify(scenario.input)}"`, () => {
      const expected = scenario.output;
      const actual = toRgb(scenario.input);
      assert.equal(actual, expected);
    });
  }
});
