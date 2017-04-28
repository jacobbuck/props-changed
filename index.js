'use strict';

module.exports = function propsChanged(propNames, objectA, objectB) {
  if (objectA === objectB) {
    return false;
  }

  if (
    typeof objectA !== 'object' || objectA === null ||
    typeof objectB !== 'object' || objectB === null
  ) {
    return true;
  }

  var i = propNames.length;
  var propName;
  while (i--) {
    propName = propNames[i];
    if (
      objectA.hasOwnProperty(propName) !== objectB.hasOwnProperty(propName) ||
      objectA[propName] !== objectB[propName]
    ) {
      return true;
    }
  }

  return false;
};
