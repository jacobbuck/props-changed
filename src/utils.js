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
