import { curry, pathsEq } from './utils';

export const propChanged = curry(
  (prop, objA, objB) => !pathsEq([prop], objA, objB)
);

export const propsChanged = curry(
  (props, objA, objB) => !pathsEq(props, objA, objB)
);
