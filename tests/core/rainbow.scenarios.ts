import { Color } from "../../src/types";

interface Scenario {
  input: {
    numOfSteps: number
  },
  output: Color[]
}

const scenarios: Scenario[] = [
  {
    input: {
      numOfSteps: 1
    },
    output: [
      [255, 0, 0]
    ]
  },
  {
    input: {
      numOfSteps: 2
    },
    output: [
      [255, 0, 0],
      [0, 255, 255]
    ]
  },
  {
    input: {
      numOfSteps: 3
    },
    output: [
      [255, 0, 0],
      [0, 255, 0],
      [0, 0, 255]
    ]
  },
  {
    input: {
      numOfSteps: 5
    },
    output: [
      [255, 0, 0],
      [204, 255, 0],
      [0, 255, 102],
      [0, 102, 255],
      [204, 0, 255]
    ]
  },
  {
    input: {
      numOfSteps: 10
    },
    output: [
      [255, 0, 0],
      [255, 153, 0],
      [204, 255, 0],
      [51, 255, 0],
      [0, 255, 102],
      [0, 255, 255],
      [0, 102, 255],
      [51, 0, 255],
      [204, 0, 255],
      [255, 0, 153]
    ]
  },
];

export default scenarios;


