import { bench, describe } from 'vitest';
import { cloneDeep as cloneDeepEs } from 'es-toolkit/object';
import _ from 'lodash';
import generateRandomValue from './utils/generateRandomValue';
import { cloneDeep } from '../src';

describe('cloneDeep: simple value benchmark test', () => {
  const arg = { a: 'a', b: 'b' };
  bench('cloneDeep of @in-ch/clonedeep', () => {
    cloneDeep(arg);
  });
  bench('cloneDeep of es-toolkit', () => {
    cloneDeepEs(arg);
  });
  bench('cloneDeep of lodash ', () => {
    _.cloneDeep(arg);
  });
});

describe('cloneDeep: 3 deep value benchmark test', () => {
  const arg = generateRandomValue(3);
  bench('cloneDeep of @in-ch/clonedeep', () => {
    cloneDeep(arg);
  });
  bench('cloneDeep of es-toolkit', () => {
    cloneDeepEs(arg);
  });
  bench('cloneDeep of lodash ', () => {
    _.cloneDeep(arg);
  });
});

describe('cloneDeep: 5 deep value benchmark test', () => {
  const arg = generateRandomValue(5);
  bench('cloneDeep of @in-ch/clonedeep', () => {
    cloneDeep(arg);
  });
  bench('cloneDeep of es-toolkit', () => {
    cloneDeepEs(arg);
  });
  bench('cloneDeep of lodash ', () => {
    _.cloneDeep(arg);
  });
});

describe('cloneDeep: 7 deep value benchmark test', () => {
  const arg = generateRandomValue(7);
  bench('cloneDeep of @in-ch/clonedeep', () => {
    cloneDeep(arg);
  });
  bench('cloneDeep of es-toolkit', () => {
    cloneDeepEs(arg);
  });
  bench('cloneDeep of lodash ', () => {
    _.cloneDeep(arg);
  });
});

describe('cloneDeep: 9 deep value benchmark test', () => {
  const arg = generateRandomValue(9);
  bench('cloneDeep of @in-ch/clonedeep', () => {
    cloneDeep(arg);
  });
  bench('cloneDeep of es-toolkit', () => {
    cloneDeepEs(arg);
  });
  bench('cloneDeep of lodash ', () => {
    _.cloneDeep(arg);
  });
});

describe('cloneDeep: 11 deep value benchmark test', () => {
  const arg = generateRandomValue(11);
  bench('cloneDeep of @in-ch/clonedeep', () => {
    cloneDeep(arg);
  });
  bench('cloneDeep of es-toolkit', () => {
    cloneDeepEs(arg);
  });
  bench('cloneDeep of lodash ', () => {
    _.cloneDeep(arg);
  });
});
