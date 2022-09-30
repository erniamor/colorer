import { Color, Rgb } from "../types";
/**
 * fromRgb
 * 
 * Convert color from RGB string to RGB array
 * 
 * @param {Rgb} rgb RGB color string
 * @returns {Color | null} RGB color array
 */
export default function fromRgb(rgb: Rgb): Color | null {
  const values = rgb.match(/\d+/g);
  if (values && values.length === 3) return [Number(values[0]), Number(values[1]), Number(values[2])];
  else return null;
}