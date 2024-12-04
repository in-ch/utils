import { chunk } from '../src';

describe('chunk', () => {
  test('should return chunked array', () => {
    const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const chunked = chunk(mock, 2);
    expect(chunked).toEqual([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]);
  });
  it('should return an empty array when the input array is empty', () => {
    expect(chunk([], 3)).toEqual([]);
  });
  test('If the size is negative, throw an exception', () => {
    const mock = [1, 2, 3, 4, 5];
    expect(() => {
      chunk(mock, -1);
    }).toThrow("Chunk size must be a positive integer.")
  });
  test('If the size is float, throw an exception', () => {
    const mock = [1, 2, 3, 4, 5];
    expect(() => {
      chunk(mock, Math.PI);
    }).toThrow("Chunk size must be a positive integer.")
  });
  test('If the size is smaller than the array length, original array must be returned.', () => {
    const mock = [1, 2, 3, 4, 5];
    const chunked = chunk(mock, 6);

    expect(chunked).toEqual(mock);
    expect(chunked.length).toEqual(mock.length);
  });
  test('Regardless of whether the input array is deeply nested, the returned array will always be flattened to a depth of 1.', () => {
    const mock = [1, [2, 3, 4], [5, 6, 7], 8, 9, 10, [11], [12, 13, 14]];
    const chunked = chunk(mock, 2);
    expect(chunked).toEqual([
              [ 1, [ 2, 3, 4 ] ],
              [ [ 5, 6, 7 ], 8 ],
              [ 9, 10 ],
              [ [ 11 ], [ 12, 13, 14 ] ]
    ]);
  });
  test('The array can contain values of varying types.', () => {
    const mock = [1, "2", {3:3}, 4.4, 5];
    const chunked = chunk(mock, 3);
    expect(chunked).toEqual([[1, "2", {3:3}], [4.4, 5]]);
  });
});
