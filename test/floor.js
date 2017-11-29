var assert = require('assert');
var num = require('../');

test('floor', function() {
    assert.equal(num(1).floor(), '1');
    assert.equal(num(1.5).floor(), '1');

    assert.equal(num(-1).floor(), '-1');
    assert.equal(num(-1.5).floor(), '-2');

    assert.equal(num(1.123).floor(8), '1.123');
    assert.equal(num(1.12345).floor(8), '1.12345');

    assert.equal(num(1.123).floor(3), '1.123');
    assert.equal(num(1.12345).floor(3), '1.123');

    assert.equal(num(-1.123).floor(3), '-1.123');
    assert.equal(num(-1.12345).floor(3), '-1.124');

    assert.equal(num(1.00005).floor(3), '1.000');
    assert.equal(num(-1.00005).floor(3), '-1.001');
});
