import { Hex, Rgb } from "../../src/types";

interface Scenario {
  input: Hex,
  output: Rgb
}

const scenarios: Scenario[] = [
  {
    input: '#000000',
    output: 'rgb(0, 0, 0)'
  },
  {
    input: '#ffffff',
    output: 'rgb(255, 255, 255)'
  },
  {
    input: '#ff0000',
    output: 'rgb(255, 0, 0)'
  },
  {
    input: '#00ff00',
    output: 'rgb(0, 255, 0)'
  },
  {
    input: '#0000ff',
    output: 'rgb(0, 0, 255)'
  },
];

export default scenarios;