# Colorer

> Colorer is a minimalist JavaScript library that provide some color helpers.

* 💪 Immutable
* 📦 No dependancies
* 👫 All browsers supported
* ✅ Fully tested

---

## Getting Started

### Installation

```console
npm install @erniamor/colorer
```

### Usage

1. Import function from package

```javascript
import { fromHex } from '@erniamor/colorer';
// or
const { fromHex } = require('@erniamor/colorer');
```

2. Call function with expected arguments

```javascript
fromHex('#ff0000'); // return [255, 0, 0]
```

---

## API

It's easy to use Colorer APIs.

### fromHex

Convert a color format from HEX string to RGB array.

**Arguments**

hex (string) : A HEX color string

**Return**

(array | null) : The RGB color array

**Example**

```javascript
fromHex('#ff0000'); // return [255, 0, 0]
```

### toHex

Convert a color format from RGB array to HEX string.

**Arguments**

rgb (array) : A RGB color array

**Return**

(string) : The HEX color string

**Example**

```javascript
toHex([255, 0, 0]); // return '#ff0000'
```

### fromRgb

Convert a color format from RGB string to RGB array.

**Arguments**

rgb (string) : A RGB color string

**Return**

(array | null) : The RGB color array

**Example**

```javascript
fromRgb('rgb(255, 0, 0)'); // return [255, 0, 0]
```

### toRgb

Convert a color format from RGB array to RGB string.

**Arguments**

rgb (array) : A RGB color array

**Return**

(string) : The RGB color string

**Example**

```javascript
toRgb([255, 0, 0]); // return 'rgb(255, 0, 0)'
```

### hexToRgb

Convert a color format from HEX string to RGB string.

**Arguments**

hex (string) : A HEX color string

**Return**

(string | null) : The RGB color string

**Example**

```javascript
hexToRgb('#ff0000'); // return 'rgb(255, 0, 0)'
```

### rgbToHex

Convert a color format from RGB string to HEX string.

**Arguments**

rgb (string) : A RGB color string

**Return**

(string | null) : The HEX color string

**Example**

```javascript
hexToRgb('rgb(255, 0, 0)'); // return '#ff0000'
```

### random

Generate random rgb color array.

**Arguments**

none

**Return**

(string) : A RGB color array

**Example**

```javascript
random(); // return [120, 56, 203]
```

### rainbowColor

Generates spaced colour given step

**Arguments**

numOfSteps (number) : The total number of steps
step (number) : The current step index

**Return**

(string) : A RGB color array

**Example**

```javascript
rainbow(3, 0); // return [255, 0, 0]
rainbow(3, 1); // return [0, 255, 0]
rainbow(3, 2); // return [0, 0, 255]
```

### rainbow

Generates spaced colours given number of steps.

**Arguments**

numOfSteps (number) : The total number of steps

**Return**

(array) : An array of RGB color array

**Example**

```javascript
rainbow(3); // return [[255, 0, 0], [0, 255, 0], [0, 0, 255]]
rainbow(5); // return [[255, 0, 0], [204, 255, 0], [0, 255, 102], [0, 102, 255], [204, 0, 255]]
```

### interpolate

Return a Color interpolation between given colors based on the factor given.

**Arguments**

start (array) : The starting color
end (array) : The ending color
factor (number) : The interpolation factor 

**Return**

(array) : A RGB color array

**Example**

```javascript
interpolate([0, 100, 200], [100, 200, 300], 0.5); // return [50, 150, 250]
```

### interpolation

Interpolate between two colors completely, returning an array of colors.

**Arguments**

start (array) : The starting color
end (array) : The ending color
steps (number) : The number of steps

**Return**

(array) : An array of RGB color array

**Example**

```javascript
interpolation([0, 100, 200], [100, 200, 300], 6); // return [[0, 100, 200], [20, 120, 220], [40, 140, 240], [60, 160, 260], [80, 180, 280], [100, 200, 300]]
```

---

## Tests

Run tests with npm test command

```console
npm run test
```

---

## License

Colorer is licensed under a [MIT License](./LICENSE).