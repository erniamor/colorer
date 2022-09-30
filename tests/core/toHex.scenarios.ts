import { Color, Hex } from "../../src/types";

interface Scenario {
  input: Color,
  output: Hex
}

const scenarios: Scenario[] = [
  {
    input: [0, 0, 0],
    output: '#000000',
  },
  {
    input: [255, 255, 255],
    output: '#ffffff',
  },
  {
    input: [255, 0, 0],
    output: '#ff0000',
  },
  {
    input: [0, 255, 0],
    output: '#00ff00',
  },
  {
    input: [0, 0, 255],
    output: '#0000ff',
  },
];

export default scenarios;