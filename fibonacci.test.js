
import test from 'node:test';
import * as assert from "node:assert";
import { fibonacci  } from './fibonacci.js';

test('fibonacci 1 is 1', () => {
    assert.strictEqual(fibonacci(1), 1);
})
test('fibonacci 2 is 1', () => {
    assert.strictEqual(fibonacci(2), 1);
})
test('fibonacci 3 is 2', () => {
    assert.strictEqual(fibonacci(3), 2);
})
test('fibonacci 5 is 5', () => {
    assert.strictEqual(fibonacci(5), 5);
})
test('fibonacci 10 is 55', () => {
    assert.strictEqual(fibonacci(10), 55);
})
test('fibonacci 20 is 6765', () => {
    assert.strictEqual(fibonacci(20), 6765);
})