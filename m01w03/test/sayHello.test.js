const sayHello = require('../sayHello');
const assert = require('assert');

describe('tests for the sayHello function', () => {

  it('returns "hello there alice" when given the string "alice"', () => {
    const actual = sayHello('alice');
    const expected = 'hello there alice';

    assert.strictEqual(actual, expected);
  });

});
