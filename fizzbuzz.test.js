
import test from 'node:test';
import * as assert from "node:assert";
import { fizzbuzz } from './fizzbuzz.js';

test('fizzbuzz 1 is 1', () => {
    assert.strictEqual(fizzbuzz(1), "1");
})
test('fizzbuzz 3 is Fizz', () => {
    assert.strictEqual(fizzbuzz(3), "Fizz");
})
test('fizzbuzz 5 is Buzz', () => {
    assert.strictEqual(fizzbuzz(5), "Buzz");
})
test('fizzbuzz 15 is FizzBuzz', () => {
    assert.strictEqual(fizzbuzz(15), "FizzBuzz");
})
