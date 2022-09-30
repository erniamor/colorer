import { Hex, Rgb } from "../types";
import fromRgb from "./fromRgb";
import toHex from "./toHex";

/**
 * rgbToHex
 * 
 * Convert color from RGB string to HEX string.
 * 
 * @param {Rgb} rgb RGB color string
 * @returns {Hex | null} HEX color string
 */
export default function rgbToHex(rgb: Rgb): Hex | null {
  const color = fromRgb(rgb);
  return color ? toHex(color) : null;
}
