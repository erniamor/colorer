import { Color, Rgb } from "../../src/types";

interface Scenario {
  input: Rgb,
  output: Color | null
}

const scenarios: Scenario[] = [
  {
    input: 'rgb(0, 0, 0)',
    output: [0, 0, 0]
  },
  {
    input: 'rgb(255, 255, 255)',
    output: [255, 255, 255]
  },
  {
    input: 'rgb(255, 0, 0)',
    output: [255, 0, 0]
  },
  {
    input: 'rgb(0, 255, 0)',
    output: [0, 255, 0]
  },
  {
    input: 'rgb(0, 0, 255)',
    output: [0, 0, 255]
  },
  {
    input: 'abc',
    output: null
  },
];

export default scenarios;