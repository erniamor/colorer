import { Color, Rgb } from "../../src/types";

interface Scenario {
  input: Color,
  output: Rgb,
}

const scenarios: Scenario[] = [
  {
    input: [0, 0, 0],
    output: 'rgb(0, 0, 0)',
  },
  {
    input: [255, 255, 255],
    output: 'rgb(255, 255, 255)',
  },
  {
    input: [255, 0, 0],
    output: 'rgb(255, 0, 0)',
  },
  {
    input: [0, 255, 0],
    output: 'rgb(0, 255, 0)',
  },
  {
    input: [0, 0, 255],
    output: 'rgb(0, 0, 255)',
  },
];

export default scenarios;