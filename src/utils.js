export const curry = (fn) => {
  const curried = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...args2) => curried(...args, ...args2);
  return curried;
};

export const isObject = (obj) => !!obj && typeof obj === 'object';

export const path = (path, obj) =>
  (typeof path === 'string' ? path.split('.') : path).reduce(
    (result, prop) =>
      isObject(result) && Object.hasOwn(result, prop)
        ? result[prop]
        : undefined,
    obj
  );

export const pathsEqWith = (comparitor, paths, objA, objB) =>
  isObject(objA) &&
  isObject(objB) &&
  (objA === objB ||
    paths.every((p) => comparitor(path(p, objA), path(p, objB))));
