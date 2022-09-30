import { Color } from "../types";
/**
 * interpolate
 * 
 * Return a Color interpolation between given colors based on the factor given.
 * 
 * @param {Color} start
 * @param {Color} end
 * @param {number} factor
 * @returns {Color}
 */
export default function interpolate(start: Color, end: Color, factor: number = 0.5): Color {
  const result = start.slice() as Color;
  for (let i = 0; i < result.length; i++) {
    result[i] = Math.round(result[i] + factor * (end[i] - start[i]));
  }
  return result;
}