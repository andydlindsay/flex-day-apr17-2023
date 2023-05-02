// describe(); // grouping related tests together; optional

// it(); // we are executing a test

const assert = require('assert');

describe('basic tests', () => {

  it('can pass the test', () => {
    // throw new Error('ooops');
    assert.strictEqual(2, 2);
  });

});
