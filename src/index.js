import { curry, path } from './utils';

export const propChangedWith = curry(
  (comparitor, prop, objA, objB) =>
    objA !== objB && !comparitor(path(prop, objA), path(prop, objB))
);

export const propsChangedWith = curry(
  (comparitor, props, objA, objB) =>
    objA !== objB &&
    props.some((prop) => !comparitor(path(prop, objA), path(prop, objB)))
);

export const propChanged = propChangedWith(Object.is);

export const propsChanged = propsChangedWith(Object.is);
