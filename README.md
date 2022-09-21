# Colorer

> Colorer is a minimalist JavaScript library that provide some color helpers.

* 💪 Immutable
* 📦 No dependancies
* 👫 All browsers supported

---

## Getting Started

### Installation

```console
npm install @erniamor/colorer
```

### Usage

1. Import function from package

```javascript
import { rainbow } from '@erniamor/colorer';
```

2. Call function with expected arguments

```javascript
rainbow(3, 2); // return #0000ff
```

---

## API

It's easy to use Colorer APIs.

### rainbow

Generates spaced colours on HEX format.

**Arguments**

numOfSteps (number) : The total number of steps
step (number) : The current step index

**Return**

(string) : A color on HEX format

**Example**

```javascript
rainbow(3, 2); // return #0000ff
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