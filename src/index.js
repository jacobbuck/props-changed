import { curry, path } from './utils';

export const propsChangedWith = curry(
  (comparitor, props, objA, objB) =>
    objA !== objB &&
    props.some((p) => !comparitor(path(p, objA), path(p, objB)))
);

export const propChangedWith = curry((comparator, prop, objA, objB) =>
  propsChangedWith(comparator, [prop], objA, objB)
);

export const propChanged = propChangedWith(Object.is);

export const propsChanged = propsChangedWith(Object.is);
