import { Color } from "../../src/types";

interface Scenario {
  input: {
    start: Color,
    end: Color,
    steps: number,
  },
  output: Color[]
}

const scenarios: Scenario[] = [
  {
    input: {
      start: [0, 0, 0],
      end: [255, 255, 255],
      steps: 3
    },
    output: [
      [0, 0, 0],
      [128, 128, 128],
      [255, 255, 255],
    ]
  },
  {
    input: {
      start: [0, 100, 200],
      end: [100, 200, 300],
      steps: 6
    },
    output: [
      [0, 100, 200],
      [20, 120, 220],
      [40, 140, 240],
      [60, 160, 260],
      [80, 180, 280],
      [100, 200, 300],
    ]
  },
];

export default scenarios;