var assert = require('chai').assert;
var HundredToNineNinetyNine = require('../lib/hundredToNineNinetyNine');

describe('hundredToNineNinetyNine', function() {
    describe('represent', function() {
        var hundredToNineNinetyNine;
        beforeEach(function() {
            hundredToNineNinetyNine = new HundredToNineNinetyNine();
        });
        it('should return one hundred for 100', function() {
            var ans = hundredToNineNinetyNine.represent(100);
            assert.equal(ans, 'one hundred');
        });
        it('should return one hundred thirty three for 133', function() {
            var ans = hundredToNineNinetyNine.represent(133);
            assert.equal(ans, 'one hundred thirty three');
        });
        it('should return two hundred for 200', function() {
            var ans = hundredToNineNinetyNine.represent(200);
            assert.equal(ans, 'two hundred');
        });
        it('should return five hundred sixty seven for 567', function() {
            var ans = hundredToNineNinetyNine.represent(567);
            assert.equal(ans, 'five hundred sixty seven');
        });
        it('should return seven hundred seventeen for 717', function() {
            var ans = hundredToNineNinetyNine.represent(717);
            assert.equal(ans, 'seven hundred seventeen');
        });
        it('should return nine hundred ninety nine for 999', function() {
            var ans = hundredToNineNinetyNine.represent(999);
            assert.equal(ans, 'nine hundred ninety nine');
        });
        it('should return nine hundred nine for 909', function() {
            var ans = hundredToNineNinetyNine.represent(909);
            assert.equal(ans, 'nine hundred nine');
        });
        it('should return one for 001', function() {
            var ans = hundredToNineNinetyNine.represent(001);
            assert.equal(ans, 'one');
        });
    });
});
