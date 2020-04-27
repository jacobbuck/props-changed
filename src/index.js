import curry from 'curry';

const castArray = (value) => (Array.isArray(value) ? value : [value]);

const propsChanged = (propNames, objectA, objectB) => {
  if (Object.is(objectA, objectB)) {
    return false;
  }

  if (
    typeof objectA !== 'object' ||
    typeof objectB !== 'object' ||
    objectA === null ||
    objectB === null
  ) {
    return true;
  }

  return castArray(propNames).some(
    (propName) => !Object.is(objectA[propName], objectB[propName])
  );
};

export default curry(propsChanged);
