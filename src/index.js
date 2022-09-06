import { curry, pathsEqWith } from './utils';

export const propChangedWith = curry(
  (comparator, prop, objA, objB) => !pathsEqWith(comparator, [prop], objA, objB)
);

export const propsChangedWith = curry(
  (comparator, props, objA, objB) => !pathsEqWith(comparator, props, objA, objB)
);

export const propChanged = propChangedWith(Object.is);

export const propsChanged = propsChangedWith(Object.is);
