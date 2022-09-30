import { Color } from "../../src/types";

interface Scenario {
  input: {
    numOfSteps: number,
    step: number,
  },
  output: Color
}

const scenarios: Scenario[] = [
  {
    input: {
      numOfSteps: 3,
      step: 0
    },
    output: [255, 0, 0]
  },
  {
    input: {
      numOfSteps: 3,
      step: 1
    },
    output: [0, 255, 0]
  },
  {
    input: {
      numOfSteps: 3,
      step: 2
    },
    output: [0, 0, 255]
  },
];

export default scenarios;