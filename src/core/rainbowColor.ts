import { Color } from "../types";
/**
 * rainbowColor
 * 
 * Generates spaced colour given step
 * 
 * @param {number} numOfSteps
 * @param {number} step
 * @returns {Color} color
 */
export default function rainbowColor(numOfSteps: number, step: number): Color {
  let r = 0, g = 0, b = 0;
  const h = step / numOfSteps;
  const i = ~~(h * 6);
  const f = h * 6 - i;
  const q = 1 - f;
  switch (i % 6) {
    case 0: r = 1; g = f; b = 0; break;
    case 1: r = q; g = 1; b = 0; break;
    case 2: r = 0; g = 1; b = f; break;
    case 3: r = 0; g = q; b = 1; break;
    case 4: r = f; g = 0; b = 1; break;
    case 5: r = 1; g = 0; b = q; break;
    default: break;
  }
  return [
    Math.round(r * 255),
    Math.round(g * 255),
    Math.round(b * 255)
  ];
}