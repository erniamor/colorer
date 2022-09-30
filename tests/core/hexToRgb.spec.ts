import 'mocha';
import { assert } from 'chai';

import hexToRgb from '../../src/core/hexToRgb';
import SCENARIOS from './hexToRgb.scenarios';

describe('hexToRgb Function', () => {
  it('should be a function', () => {
    assert.isFunction(hexToRgb);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return Rgb "${scenario.output}" for Hex "${scenario.input}"`, () => {
      const expected = scenario.output;
      const actual = hexToRgb(scenario.input);
      assert.equal(actual, expected);
    });
  }
});
