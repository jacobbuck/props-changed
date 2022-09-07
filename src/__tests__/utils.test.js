import { curry, path } from '../utils';

describe('curry', () => {
  test('returns an autocurried function', () => {
    const sum4 = curry((a, b, c, d) => a + b + c + d);
    expect(sum4(1)(2)(3)(4)).toBe(10);
    expect(sum4(1, 2)(3)(4)).toBe(10);
    expect(sum4(1)(2, 3)(4)).toBe(10);
    expect(sum4(1)(2)(3, 4)).toBe(10);
    expect(sum4(1, 2, 3)(4)).toBe(10);
    expect(sum4(1, 2)(3, 4)).toBe(10);
    expect(sum4(1)(2, 3, 4)).toBe(10);
    expect(sum4(1, 2, 3, 4)).toBe(10);
  });
});

describe('path', () => {
  const obj = { a: 'foo', b: { c: { d: 'bar' } } };

  test('returns the value of an object at a property path', () => {
    expect(path('a', obj)).toBe('foo');
    expect(path('b.c.d', obj)).toBe('bar');
    expect(path(['b', 'c', 'd'], obj)).toBe('bar');
  });

  test('returns undefined of unable to get the property path', () => {
    expect(path('a.b', obj)).toBeUndefined();
    expect(path(['b', 'd'], obj)).toBeUndefined();
    expect(path('c', obj)).toBeUndefined();
  });
});
