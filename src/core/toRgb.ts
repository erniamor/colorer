import { Color, Rgb } from "../types";
/**
 * toRgb
 * 
 * Convert color from RGB array to RGB string
 * 
 * @param {Color} rgb RGB color array
 * @returns {Rgb} RGB color string
 */
export default function toRgb(rgb: Color): Rgb {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}