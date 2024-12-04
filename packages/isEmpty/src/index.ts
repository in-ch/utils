/**
 * @param {unknown} value something any value
 * @returns {boolean} whether the value is empty
 */
export const isEmpty = (value: unknown): boolean => {
  if (value === '' || value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'object') {
    if (value instanceof Map) {
      return value.size === 0;
    }
    if (value instanceof Set) {
      return value.size === 0;
    }
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    return Object.keys(value).length === 0;
  }

  return false;
};
