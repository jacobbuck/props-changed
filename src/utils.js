export const curry = (fn) =>
  function next() {
    const args = arguments;
    return args.length >= fn.length ? fn(...args) : next.bind(next, ...args);
  };

export const path = (path, obj) =>
  (typeof path === 'string' ? path.split('.') : path).reduce(
    (result, prop) =>
      result && Object.hasOwn(result, prop) ? result[prop] : undefined,
    obj
  );
