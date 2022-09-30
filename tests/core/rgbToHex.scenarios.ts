import { Hex, Rgb } from "../../src/types";

interface Scenario {
  input: Rgb,
  output: Hex
}

const scenarios: Scenario[] = [
  {
    input: 'rgb(0, 0, 0)',
    output: '#000000',
  },
  {
    input: 'rgb(255, 255, 255)',
    output: '#ffffff',
  },
  {
    input: 'rgb(255, 0, 0)',
    output: '#ff0000',
  },
  {
    input: 'rgb(0, 255, 0)',
    output: '#00ff00',
  },
  {
    input: 'rgb(0, 0, 255)',
    output: '#0000ff',
  },
];

export default scenarios;