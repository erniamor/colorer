import { Color } from "../types";
import { interpolate } from './interpolate';
/**
 * interpolation
 * 
 * Interpolate between two colors completely, returning an array.
 * 
 * @param {Color} start - RGB color array
 * @param {Color} end - RGB color array
 * @param {number} steps - number of steps
 * @returns {Color[]} - array of RGB color array
 */
export function interpolation(start: Color, end: Color, steps: number): Color[] {
  const stepFactor = 1 / ((steps - 1 || 1));
  const interpolatedColorArray: Color[] = [];
  for (var i = 0; i < steps; i++) {
    interpolatedColorArray.push(interpolate(start, end, stepFactor * i));
  }
  return interpolatedColorArray;
}
