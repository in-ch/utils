import { cloneDeep } from '../src';

describe('cloneDeep function', () => {
  test('should deep clone a simple object', () => {
    const original = { a: 1, b: 2 };
    const copy = cloneDeep(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
  });

  test('should deep clone an object with nested objects', () => {
    const original = { a: 1, b: { c: 3, d: 4 } };
    const copy = cloneDeep(original);

    expect(copy).toEqual(original);
    expect(copy.b).not.toBe(original.b);
  });

  test('should deep clone an array', () => {
    const original = [1, 2, 3, [4, 5]];
    const copy = cloneDeep(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy[3]).not.toBe(original[3]);
  });

  test('should deep clone an object with arrays and nested objects', () => {
    const original = { a: 1, b: [2, { c: 3, d: 4 }] };
    const copy = cloneDeep(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy.b).not.toBe(original.b);
    expect(copy.b[1]).not.toBe(original.b[1]);
  });

  test('should return the same value for primitive types', () => {
    expect(cloneDeep(42)).toBe(42);
    expect(cloneDeep('hello')).toBe('hello');
    expect(cloneDeep(true)).toBe(true);
    expect(cloneDeep(null)).toBeNull();
    expect(cloneDeep(undefined)).toBeUndefined();
  });

  test('should handle empty objects and arrays', () => {
    expect(cloneDeep({})).toEqual({});
    expect(cloneDeep([])).toEqual([]);
  });
});
