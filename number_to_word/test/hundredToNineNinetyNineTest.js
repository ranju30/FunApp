var assert = require('chai').assert;
var HundredToNineNinetyNine = require('../lib/hundredToNineNinetyNine');

describe('hundredToNineNinetyNine', function() {
    describe('represent', function() {
        var hundredToNineNinetyNine;
        beforeEach(function() {
            hundredToNineNinetyNine = new HundredToNineNinetyNine();
        });
        it('should return the word for 100', function() {
            var ans = hundredToNineNinetyNine.represent(100);
            assert.equal(ans, 'one hundred');
        });
        it('should return the word for 133', function() {
            var ans = hundredToNineNinetyNine.represent(133);
            assert.equal(ans, 'one hundred thirty three');
        });
        it('should return the word for 200', function() {
            var ans = hundredToNineNinetyNine.represent(200);
            assert.equal(ans, 'two hundred');
        });
        it('should return the word for 567', function() {
            var ans = hundredToNineNinetyNine.represent(567);
            assert.equal(ans, 'five hundred sixty seven');
        });
        it('should return the word for 717', function() {
            var ans = hundredToNineNinetyNine.represent(717);
            assert.equal(ans, 'seven hundred seventeen');
        });
        it('should return the word for 999', function() {
            var ans = hundredToNineNinetyNine.represent(999);
            assert.equal(ans, 'nine hundred ninety nine');
        });
    });
});
