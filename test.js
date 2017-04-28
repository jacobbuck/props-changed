var expect = require('expect');
var propsChanged = require('./');

describe('props-changed', function() {
  it('compares objects', function() {
    expect(propsChanged(['x'], { x: 1, y: 1 }, { x: 1, y: 2 })).toBe(false);
    expect(propsChanged(['x', 'y'], { x: 1, y: 1 }, { x: 1, y: 2 })).toBe(true);
  });

  it('compares objects without defined properties', function() {
    expect(propsChanged(['z'], { x: 1, y: 1 }, { x: 1, y: 2 })).toBe(false);
    expect(propsChanged(['z'], { z: 1, y: 1 }, { x: 1, y: 2 })).toBe(true);
    expect(propsChanged(['z'], { x: 1, y: 1 }, { z: 1, y: 2 })).toBe(true);
    expect(propsChanged(['y', 'z'], { x: 1, y: 1 }, { x: 1, y: 2 })).toBe(true);
  });

  it('compares objects with strict equality comparison', function() {
    expect(propsChanged(['x'], { x: 1 }, { x: '1' })).toBe(true);
  });

  it('compares the same object', function() {
    var obj = { x: 1 };
    expect(propsChanged(['x'], obj, obj)).toBe(false);
    expect(propsChanged(['x', 'y', 'z'], obj, obj)).toBe(false);
    expect(propsChanged([], obj, obj)).toBe(false);
  });
});
