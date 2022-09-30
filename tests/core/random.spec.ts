import 'mocha';
import { assert } from 'chai';

import random from '../../src/core/random';

describe('random Function', () => {
  it('should be a function', () => {
    assert.isFunction(random);
  });
  it(`should return an array`, () => {
    assert.isArray(random());
  });
  it(`should return an array of length 3`, () => {
    const result = random();
    const expected = 3;
    const actual = result.length;
    assert.equal(actual, expected);
  });
  it(`should return an array with red value between 0 and 255`, () => {
    const result = random();
    const expected = true;
    const actual = (result[0] >= 0 && result[0] <= 255);
    assert.equal(actual, expected);
  });
  it(`should return an array with green value between 0 and 255`, () => {
    const result = random();
    const expected = true;
    const actual = (result[1] >= 0 && result[1] <= 255);
    assert.equal(actual, expected);
  });
  it(`should return an array with blue value between 0 and 255`, () => {
    const result = random();
    const expected = true;
    const actual = (result[2] >= 0 && result[2] <= 255);
    assert.equal(actual, expected);
  });
});
