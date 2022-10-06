import { Color, Hex } from "../types";
/**
 * fromHex
 * 
 * Convert color from HEX string to RGB array
 * 
 * @param {Hex} hex HEX color string
 * @returns {Color | null} RGB color array
 */
export function fromHex(hex: Hex): Color | null {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}