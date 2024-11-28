import { describe, bench } from 'vitest';
import { deepClone } from "../src";

describe("deepClone benchmark test", () => {
    bench('should return ', () => {
        deepClone({"a": "a", "b": "b"});
    });
    bench('should return 222', () => {
        deepClone({"a": "a", "b": "b", "c": "c", "d": "d", "e": "e", "aa": "a", "bv": "b", "cc": "c", "dd": "d", "ee": "e"});
    });
    bench('should return ', () => {
        deepClone({"a": "a", "b": "b"});
    });
});