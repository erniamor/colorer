import 'mocha';
import { assert } from 'chai';

import npmPackage from '../src/index';
import {
  fromHex,
  fromRgb,
  hexToRgb,
  interpolate,
  interpolation,
  rainbow,
  rainbowColor,
  random,
  rgbToHex,
  toHex,
  toRgb
} from '../src/index';

describe('Colorer', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });
  it('should have a fromHex property', () => {
    assert.property(npmPackage, 'fromHex');
  });
  it('should have a fromRgb property', () => {
    assert.property(npmPackage, 'fromRgb');
  });
  it('should have a hexToRgb property', () => {
    assert.property(npmPackage, 'hexToRgb');
  });
  it('should have a interpolate property', () => {
    assert.property(npmPackage, 'interpolate');
  });
  it('should have a interpolation property', () => {
    assert.property(npmPackage, 'interpolation');
  });
  it('should have a rainbow property', () => {
    assert.property(npmPackage, 'rainbow');
  });
  it('should have a rainbowColor property', () => {
    assert.property(npmPackage, 'rainbowColor');
  });
  it('should have a random property', () => {
    assert.property(npmPackage, 'random');
  });
  it('should have a rgbToHex property', () => {
    assert.property(npmPackage, 'rgbToHex');
  });
  it('should have a toHex property', () => {
    assert.property(npmPackage, 'toHex');
  });
  it('should have a toRgb property', () => {
    assert.property(npmPackage, 'toRgb');
  });


  describe('fromHex', () => {
    it('should be a function', () => {
      assert.isFunction(fromHex);
    });
  });
  describe('fromRgb', () => {
    it('should be a function', () => {
      assert.isFunction(fromRgb);
    });
  });
  describe('hexToRgb', () => {
    it('should be a function', () => {
      assert.isFunction(hexToRgb);
    });
  });
  describe('interpolate', () => {
    it('should be a function', () => {
      assert.isFunction(interpolate);
    });
  });
  describe('interpolation', () => {
    it('should be a function', () => {
      assert.isFunction(interpolation);
    });
  });
  describe('rainbow', () => {
    it('should be a function', () => {
      assert.isFunction(rainbow);
    });
  });
  describe('rainbowColor', () => {
    it('should be a function', () => {
      assert.isFunction(rainbowColor);
    });
  });
  describe('random', () => {
    it('should be a function', () => {
      assert.isFunction(random);
    });
  });
  describe('rgbToHex', () => {
    it('should be a function', () => {
      assert.isFunction(rgbToHex);
    });
  });
  describe('toHex', () => {
    it('should be a function', () => {
      assert.isFunction(toHex);
    });
  });
  describe('toRgb', () => {
    it('should be a function', () => {
      assert.isFunction(toRgb);
    });
  });
});