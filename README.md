# props-changed

Compare if specified properties of two objects are different.

## Usage

```js
import { propsChanged, propsEqual } from 'props-changed';
```

### `propsChanged`

Compares properties between two objects are different.

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
propsChanged(['x', 'y.z'], { x: 1, y: { z: 1 } }, { x: 1, y: { z: 2 } }); // true
```

Property paths as arrays

```js
propsChanged([['x'], ['y', 'z']], { x: 1, y: { z: 1 } }, { x: 1, y: { z: 2 } }); // true
```

### `propsEqual`

Compares multiple properties between two objects.

```js
propsChanged(props, objA, objB);
```

#### Parameters

- `props` array of property names and/or paths to compare
- `obtA` object to compare
- `objB` other object to compare

#### Returns

`true` if any of the values at each property are the same value, else `false`.

#### Examples

```js
propsEqual(['x', 'y'], { x: 1, y: 1 }, { x: 1, y: 2 }); // true
```

## Currying

All functions have auto-currying to make functional programming easier. For example:

```js
const xChanged = propsChanged(['x']);

xChanged({ x: 1 }, { x: 2 }); // true
xChanged({ x: 1 })({ x: 2 }); // true
```
