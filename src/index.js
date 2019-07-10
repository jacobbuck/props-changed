import arrify from 'arrify';
import curry from 'curry';

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

  return arrify(propNames).some(
    propName => !Object.is(objectA[propName], objectB[propName])
  );
};

export default curry(propsChanged);
