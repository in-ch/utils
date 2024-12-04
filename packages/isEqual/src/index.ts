/**
 * Type guard function to check if the given value is an object.
 *
 * This function returns `true` if the value is of type `object` and not `null`.
 * It is primarily used to narrow down the type of an `unknown` value to `Record<string, unknown>`.
 *
 * @param {unknown} obj - The value to be checked, of type `unknown`
 * @returns {boolean} `true` if the value is an object and not `null`, otherwise `false`
 */
export const isObject = (obj: unknown): obj is Record<string, unknown> => {
  return typeof obj === 'object' && obj !== null;
};

/**
 * Recursively compares two values to determine if they are deeply equal.
 *
 * This function checks if the values are strictly equal (`===`). If they are objects or arrays, it performs
 * a deep comparison of their properties or elements. Arrays, objects, Sets, and Maps are traversed recursively
 * to ensure all values are compared at all levels.
 *
 * It handles:
 * - Primitive types (numbers, strings, booleans, `null`, `undefined`)
 * - Arrays and objects (including nested structures)
 * - Special cases like `NaN` and cyclic references are not supported.
 *
 * @param {unknown} value - The first value to compare.
 * @param {unknown} other - The second value to compare.
 * @returns {boolean} `true` if the values are deeply equal, `false` otherwise.
 */
export const isDeepEqual = (value: unknown, other: unknown): boolean => {
  if (value === other) {
    return true;
  }
  if (typeof value !== 'object' || value === null || typeof other !== 'object' || other === null) {
    return false;
  }
  if (!isObject(value) || !isObject(other)) {
    return false;
  }
  const valueKeys = Object.keys(value);
  const otherKeys = Object.keys(other);
  if (valueKeys.length !== otherKeys.length) {
    return false;
  }
  return valueKeys.every(key =>
    isDeepEqual((value as Record<string, unknown>)[key], (other as Record<string, unknown>)[key])
  );
};
