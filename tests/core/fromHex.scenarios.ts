import { Color, Hex } from "../../src/types";

interface Scenario {
  input: Hex,
  output: Color | null
}

const scenarios: Scenario[] = [
  {
    input: '#000000',
    output: [0, 0, 0]
  },
  {
    input: '#ffffff',
    output: [255, 255, 255]
  },
  {
    input: '#ff0000',
    output: [255, 0, 0]
  },
  {
    input: '#00ff00',
    output: [0, 255, 0]
  },
  {
    input: '#0000ff',
    output: [0, 0, 255]
  },
  {
    input: 'abc',
    output: null
  },
];

export default scenarios;