var assert = require('assert');
var num = require('../');

test('ceil', function() {
    assert.equal(num(1).ceil(), '1');
    assert.equal(num(1.5).ceil(), '2');

    assert.equal(num(-1).ceil(), '-1');
    assert.equal(num(-1.5).ceil(), '-1');

    assert.equal(num(1.123).ceil(8), '1.123');
    assert.equal(num(1.12345).ceil(8), '1.12345');

    assert.equal(num(1.123).ceil(3), '1.123');
    assert.equal(num(1.12345).ceil(3), '1.124');

    assert.equal(num(-1.123).ceil(3), '-1.123');
    assert.equal(num(-1.12345).ceil(3), '-1.123');

    assert.equal(num(1.00005).ceil(3), '1.001');
    assert.equal(num(-1.00005).ceil(3), '-1.000');
});
