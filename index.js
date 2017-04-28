'use strict';

modules.exports = function propsChanged(propNames, aObj, bObj) {
  if (aObj === bObj) {
    return false;
  }

  if (
    typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null
  ) {
    return true;
  }

  var i = propNames.length;
  var propName;
  while (i--) {
    propName = propNames[i];
    if (
      aObj.hasOwnProperty(propName) !== bObj.hasOwnProperty(propName) ||
      aObj[propName] !== bObj[propName]
    ) {
      return true;
    }
  }

  return false;
};
