export const curry = (fn) =>
  function next() {
    return arguments.length >= fn.length
      ? fn(...arguments)
      : next.bind(next, ...arguments);
  };

export const path = (path, obj) =>
  (typeof path === 'string' ? path.split('.') : path).reduce(
    (result, prop) =>
      result && Object.hasOwn(result, prop) ? result[prop] : undefined,
    obj
  );
