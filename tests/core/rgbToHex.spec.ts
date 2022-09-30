import 'mocha';
import { assert } from 'chai';

import rgbToHex from '../../src/core/rgbToHex';
import SCENARIOS from './rgbToHex.scenarios';

describe('rgbToHex Function', () => {
  it('should be a function', () => {
    assert.isFunction(rgbToHex);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return Hex "${scenario.output}" for Rgb "${scenario.input}"`, () => {
      const expected = scenario.output;
      const actual = rgbToHex(scenario.input);
      assert.equal(actual, expected);
    });
  }
});
