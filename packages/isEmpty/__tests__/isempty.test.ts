import { isEmpty } from '../src/index';

describe('isEmpty function', () => {
  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('should return true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return true for empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  test('should return true for empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  test('should return true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('should return false for non-empty Set', () => {
    expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
  });

  test('should return false for non-empty Map', () => {
    expect(
      isEmpty(
        new Map([
          [1, 'one'],
          [2, 'two'],
        ])
      )
    ).toBe(false);
  });

  test('should return false for non-empty object', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  test('should return false for number', () => {
    expect(isEmpty(123)).toBe(false);
  });

  test('should return false for non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  test('should return false for non-null and non-undefined object', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });
});
