import { propChanged, propsChanged } from '..';

describe('propChanged', () => {
  test('compares objects with a single propName passed as string', () => {
    expect(propChanged('x', { x: 1, y: 1 }, { x: 1, y: 2 })).toBe(false);
    expect(propChanged('y', { x: 1, y: 1 }, { x: 1, y: 2 })).toBe(true);
  });
});

describe('propsChanged', () => {
  test('compares objects', () => {
    expect(propsChanged(['x'], { x: 1, y: 1 }, { x: 1, y: 2 })).toBe(false);
    expect(propsChanged(['x', 'y'], { x: 1, y: 1 }, { x: 1, y: 2 })).toBe(true);
  });

  test('compares null', () => {
    expect(propsChanged(['x'], { x: 1, y: 1 }, null)).toBe(true);
    expect(propsChanged(['x'], null, { x: 1, y: 2 })).toBe(true);
    expect(propsChanged(['x'], null, null)).toBe(false);
  });

  test('compares objects without defined properties', () => {
    expect(propsChanged(['z'], { x: 1, y: 1 }, { x: 1, y: 2 })).toBe(false);
    expect(propsChanged(['z'], { z: 1, y: 1 }, { x: 1, y: 2 })).toBe(true);
    expect(propsChanged(['z'], { x: 1, y: 1 }, { z: 1, y: 2 })).toBe(true);
    expect(propsChanged(['y', 'z'], { x: 1, y: 1 }, { x: 1, y: 2 })).toBe(true);
  });

  test('compares objects with strict equality comparison', () => {
    expect(propsChanged(['x'], { x: 1 }, { x: '1' })).toBe(true);
  });

  test('compares the same object', () => {
    const obj = { x: 1 };
    expect(propsChanged(['x'], obj, obj)).toBe(false);
    expect(propsChanged(['x', 'y', 'z'], obj, obj)).toBe(false);
    expect(propsChanged([], obj, obj)).toBe(false);
  });
});
