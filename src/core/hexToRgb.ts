import { Hex, Rgb } from "../types";
import { fromHex } from "./fromHex";
import { toRgb } from "./toRgb";

/**
 * hexToRgb
 * 
 * Convert color from HEX string to RGB string.
 * 
 * @param {Hex} hex HEX color string
 * @returns {Rgb | null} RGB color string
 */
export function hexToRgb(hex: Hex): Rgb | null {
  const color = fromHex(hex);
  return color ? toRgb(color) : null;
}
