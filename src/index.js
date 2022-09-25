import { curry, path } from './utils';

export const propsEqual = curry((props, objA, objB) =>
  props.every((prop) => Object.is(path(prop, objA), path(prop, objB)))
);

export const propsChanged = curry((props, objA, objB) =>
  props.some((prop) => !Object.is(path(prop, objA), path(prop, objB)))
);
