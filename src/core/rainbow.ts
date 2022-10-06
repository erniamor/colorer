import { Color } from "../types";
import { rainbowColor } from "./rainbowColor";

/**
 * rainbow
 * 
 * Generates spaced colours given number of steps.
 * 
 * @param {number} numOfSteps number of rainbow steps
 * @returns {Color[]} colors
 */
export function rainbow(numOfSteps: number): Color[] {
  return Array(numOfSteps).fill(0).map((value, stepIndex) => rainbowColor(numOfSteps, stepIndex));
}