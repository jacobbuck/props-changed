# props-changed

Compare values at specified properties between objects.

## Usage

```js
import { propsChanged, propsEqual } from 'props-changed';
```

### `propsChanged`

Determines if any values between objects at specified properties are not the [same](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is).

```js
propsChanged(props, objA, objB);
```

#### Parameters

- `props` array of property names and/or paths to compare
- `objA` object to compare
- `objB` other object to compare

#### Returns

`true` if any of the values at each property are different, else `false`.

#### Examples

Property names as strings

```js
propsChanged(['y'], { x: 1, y: 1 }, { x: 1, y: 2 }); // true
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

Determines if all values between objects at specified properties are the [same](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is).

```js
propsEqual(props, objA, objB);
```

#### Parameters

- `props` array of property names and/or paths to compare
- `objA` object to compare
- `objB` other object to compare

#### Returns

`true` if any of the values at each property are the same value, else `false`.

#### Examples

```js
propsEqual(['x'], { x: 1, y: 1 }, { x: 1, y: 2 }); // true
```

## Currying

All functions have auto-currying to make functional programming easier. For example:

```js
const xChanged = propsChanged(['x']);

xChanged({ x: 1 }, { x: 2 }); // true
xChanged({ x: 1 })({ x: 2 }); // true
```

## React

`propsChanged` was created for use with the `React.Component` method [`shouldComponentUpdate()`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate):

```js
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return propsChanged(['x', 'y'], this.props, nextProps);
  }
}
```

`propsEqual` can be used for [`React.memo`](https://reactjs.org/docs/react-api.html#reactmemo) with currying:

```js
const MemoedComponent = React.memo(MyComponent, propsEqual(['x', 'y']));
```
