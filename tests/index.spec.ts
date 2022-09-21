import 'mocha';
import { assert } from 'chai';

import { rainbow } from '../src/index';
import npmPackage from '../src/index';

import SCENARIOS from './index.scenarios'

describe('Colorer', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a rainbow property', () => {
    assert.property(npmPackage, 'rainbow');
  });
});

describe('rainbow Function', () => {
  it('should be a function', () => {
    assert.isFunction(rainbow);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return "${scenario.output}" with "${scenario.input.numOfSteps}" numOfSteps and "${scenario.input.step}" step`, () => {
      const expected = scenario.output;
      const actual = rainbow(scenario.input.numOfSteps, scenario.input.step);
      assert.equal(actual, expected);
    });
  }
});
