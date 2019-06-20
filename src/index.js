import arrify from 'arrify';
import curry from 'curry';

const propsChanged = (propNames, objectA, objectB) => {
  if (objectA === objectB) {
    return false;
  }

  if (
    typeof objectA !== 'object' ||
    objectA === null ||
    typeof objectB !== 'object' ||
    objectB === null
  ) {
    return true;
  }

  return arrify(propNames).some(
    propName => !Object.is(objectA[propName], objectB[propName])
  );
};

export default curry(propsChanged);
