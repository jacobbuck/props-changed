import { curry, pathsEq, pathsEqWith } from './utils';

export const propChanged = curry(
  (prop, objA, objB) => !pathsEq([prop], objA, objB)
);

export const propsChanged = curry(
  (props, objA, objB) => !pathsEq(props, objA, objB)
);

export const propChangedWith = curry(
  (comparator, prop, objA, objB) => !pathsEqWith(comparator, [prop], objA, objB)
);

export const propsChangedWith = curry(
  (comparator, props, objA, objB) => !pathsEqWith(comparator, props, objA, objB)
);
