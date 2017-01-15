var assert = require('chai').assert;
var Zero = require('../lib/zero');

describe('zero', function() {
    describe('isZero', function() {
        it('should return true if total number is zero', function() {
            var zero = new Zero();
            var ans = zero.isZero(00);
            assert.isTrue(ans);
        });
        it('should return false if total number is non zero', function() {
            var zero = new Zero();
            var ans = zero.isZero(001);
            assert.isFalse(ans);
        });
    });
    describe('represent', function() {
        it('should return zero', function() {
            var zero = new Zero();
            var ans = zero.represent();
            assert.equal(ans, 'zero');
        });
    });

});
