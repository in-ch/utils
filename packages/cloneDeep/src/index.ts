/**
 * Performs a deep copy of the given input.
 * The function will recursively copy objects and arrays.
 * If the input is a primitive value (string, number, boolean, etc.), it will be returned as-is.
 *
 * @template T - The type of the input and output.
 * @param {T} input - The value to deep copy.
 * @param {WeakMap<object, unknown>} [cache=new WeakMap()] - A cache to detect circular references.
 * @returns {T} A new object or array that is a deep copy of the input.
 */
export const cloneDeep = <T>(input: T, cache: WeakMap<object, unknown> = new WeakMap()): T => {
  if (input === null || input === undefined || typeof input !== 'object') {
    return input;
  }
  if (cache.has(input)) {
    return undefined as T;
  }
  cache.set(input, true);

  if (Array.isArray(input)) {
    return input.map(item => cloneDeep(item)) as unknown as T;
  }

  const copiedObject: Record<string, unknown> = {};
  for (const key in input) {
    if (input.hasOwnProperty.call(input, key)) {
      copiedObject[key] = cloneDeep((input as Record<string, unknown>)[key]);
    }
  }
  return copiedObject as T;
};
