import { Color } from "../../src/types";

interface Scenario {
  input: {
    start: Color,
    end: Color,
    factor: number,
  },
  output: Color
}

const scenarios: Scenario[] = [
  {
    input: {
      start: [0, 0, 0],
      end: [255, 255, 255],
      factor: 0
    },
    output: [0, 0, 0]
  },
  {
    input: {
      start: [0, 0, 0],
      end: [255, 255, 255],
      factor: 0.5
    },
    output: [128, 128, 128]
  },
  {
    input: {
      start: [0, 0, 0],
      end: [255, 255, 255],
      factor: 1
    },
    output: [255, 255, 255]
  },
  {
    input: {
      start: [100, 100, 100],
      end: [200, 200, 200],
      factor: 0.2
    },
    output: [120, 120, 120]
  },
  {
    input: {
      start: [100, 100, 100],
      end: [200, 200, 200],
      factor: 0.5
    },
    output: [150, 150, 150]
  },
  {
    input: {
      start: [100, 100, 100],
      end: [200, 200, 200],
      factor: 0.8
    },
    output: [180, 180, 180]
  },
  {
    input: {
      start: [0, 100, 200],
      end: [100, 200, 300],
      factor: 0.5
    },
    output: [50, 150, 250]
  },
];

export default scenarios;