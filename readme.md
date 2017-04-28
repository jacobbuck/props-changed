# props-changed

Shallow equals compare if specified properties of two objects are different.

## Usage

```js
propsChanged(propNames, objectA, objectB)
```

### Parameters

- `propNames` array of properties to check
- `objectA` and `objectB` objects to compare

### Return value

`true` if the values at each property name are equivalent, else `false`.

## Examples

```js
import propsChanged from 'props-changed';

propsChanged(['x'], { x: 1, y: 1 }, { x: 1, y: 2 })
// returns false

propsChanged(['x', 'y'], { x: 1, y: 1 }, { x: 1, y: 2 })
// returns true

propsChanged(['z'], { x: 1, y: 1 }, { x: 1, y: 2 })
// returns true
```
