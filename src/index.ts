/**
 * rainbow
 * 
 * Generates spaced colours on HEX format.
 * Inspired from Adam Cole, 2011-Sept-14
 * 
 * @param numOfSteps number
 * @param step number
 * @returns string - An HEX color
 */
export function rainbow(numOfSteps: number, step: number): string {
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
  const c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
  return (c);
}

export default {
  rainbow,
};
