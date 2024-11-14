/**
 * @param {unknown} value
 * @returns {boolean} whether the value is empty
 */
export const isEmpty = (value: unknown): boolean => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "object" &&
      ((Array.isArray(value) && value.length === 0) ||
        (value instanceof Set && value.size === 0) ||
        (value instanceof Map && value.size === 0) ||
        Object.keys(value).length === 0))
  );
};
