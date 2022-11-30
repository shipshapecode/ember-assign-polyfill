import { assign } from '@ember/polyfills';
import { module, test } from 'qunit';

module('Unit | assign');

test('it works', function (assert) {
  assert.deepEqual({ a: 1, b: 2, c: 3 }, assign({ a: 1 }, { b: 2 }, { c: 3 }));
});

test('it works - with gaps', function (assert) {
  assert.deepEqual(
    { a: 1, b: 2, c: 3 },
    assign({ a: 1 }, null, { b: 2 }, undefined, { c: 3 })
  );
});
