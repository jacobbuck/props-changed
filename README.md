# props-changed

Compare if specified properties of two objects are different.

## Usage

```js
import { propChanged, propsChanged } from 'props-changed';
```

### `propChanged`

Compares a single property between two objects.

```js
propChanged(prop, objA, objB);
```

#### Parameters

- `prop` property name or path to compare
- `obtA` object to compare
- `objB` other object to compare

#### Returns

`true` if any of the values at property are different, else `false`.

#### Examples

Property name as string

```js
propChanged('x', { x: 1 }, { x: 2 }); // true
```

Property path as string

```js
propChanged('x.y', { x: { y: 1 } }, { x: { y: 2 } }); // true
```

Property path as array

```js
propChanged(['x', 'y'], { x: { y: 1 } }, { x: { y: 2 } }); // true
```

### `propsChanged`

Compares multiple properties between two objects.

```js
propsChanged(props, objA, objB);
```

#### Parameters

- `props` array of property names and/or paths to compare
- `obtA` object to compare
- `objB` other object to compare

#### Returns

`true` if any of the values at each property are different, else `false`.

#### Examples

Property names as strings

```js
propsChanged(['x', 'y'], { x: 1, y: 1 }, { x: 1, y: 2 }); // true
```

Property paths as strings

```js
propChanged(['x', 'y.z'], { x: 1, y: { z: 1 } }, { x: 1, y: { z: 2 } }); // true
```

Property paths as arrays

```js
propChanged([['x'], ['y', 'z']], { x: 1, y: { z: 1 } }, { x: 1, y: { z: 2 } }); // true
```

## Currying

All functions have auto-currying to make functional programming easier. For example:

```js
const xChanged = propChanged('x');

xChanged({ x: 1 }, { x: 2 }); // true
xChanged({ x: 1 })({ x: 2 }); // true
```
