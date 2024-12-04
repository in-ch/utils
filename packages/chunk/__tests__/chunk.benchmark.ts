import { bench, describe } from 'vitest';
import { chunk as chunkES } from 'es-toolkit/array';
import _ from 'lodash';
import { chunk } from '../src';

describe('chunk: simple value benchmark test', () => {
  const arg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  bench('chunk of @in-ch/clonedeep', () => {
    chunk(arg, 2);
  });
  bench('chunk of es-toolkit', () => {
    chunkES(arg, 2);
  });
  bench('chunk of lodash ', () => {
    _.chunk(arg, 2);
  });
});
