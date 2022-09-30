import 'mocha';
import { assert } from 'chai';

import npmPackage from '../src/index';

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
});