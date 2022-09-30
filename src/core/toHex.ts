import { Color, Hex } from "../types";
/**
 * toRgb
 * 
 * Convert color from RGB array to HEX string
 * 
 * @param {Color} rgb RGB color array
 * @returns {Hex} HEX color string
 */
export default function toHex(rgb: Color): Hex {
  return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
}