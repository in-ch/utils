/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining elements.
 * 
 * @template T - Array to proceed with chunk 
 * @param {T[]} array The array to split into chunks.
 * @param {number} size The size of each chunk. Must be a positive integer.
 * @returns {T[] | T[][]} - An array of chunks, where each chunk is a sub-array of the original array.
 *                          Returns the original array if its length is smaller than the chunk size,
 *                          or an empty array if the size parameter is invalid (less than 1).
 */
export const chunk = <T>(array: T[], size: number): T[] | T[][] => {
  if (size < 1 || !((size | 0) === size)) {
    throw new Error("Chunk size must be a positive integer.");
  }
  if(array.length < size) {
    return array;
  }
  const result: T[][] = [];
  const length = array.length
  for (let i = 0; i < length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
