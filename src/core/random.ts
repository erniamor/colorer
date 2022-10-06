import { Color, Hex } from "../types";
import { fromHex } from "./fromHex";

/**
 * random
 * 
 * Generate random rgb color array
 * 
 * @returns {Color} Color array
 */
export function random(): Color {
  const hex: Hex = '#' + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
  return fromHex(hex) as Color;
}