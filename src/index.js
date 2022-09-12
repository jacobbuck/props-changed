import { curry, path } from './utils';

export const propChangedWith = curry(
  (comparator, prop, objA, objB) =>
    objA !== objB && !comparator(path(prop, objA), path(prop, objB))
);

export const propsChangedWith = curry(
  (comparator, props, objA, objB) =>
    objA !== objB &&
    props.some((prop) => !comparator(path(prop, objA), path(prop, objB)))
);

export const propChanged = propChangedWith(Object.is);

export const propsChanged = propsChangedWith(Object.is);
