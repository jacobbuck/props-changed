export const curry = (fn) => {
  const curried = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...args2) => curried(...args, ...args2);
  return curried;
};

export const path = (path, obj) =>
  (typeof path === 'string' ? path.split('.') : path).reduce(
    (result, prop) =>
      result && Object.hasOwn(result, prop) ? result[prop] : undefined,
    obj
  );

export const pathsEqWith = (comparitor, paths, objA, objB) =>
  !objA || !objB || typeof objA !== 'object' || typeof objB !== 'object'
    ? false
    : objA === objB
    ? true
    : paths.every((p) => comparitor(path(p, objA), path(p, objB)));
