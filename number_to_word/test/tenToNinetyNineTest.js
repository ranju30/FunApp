var assert = require('chai').assert;
var TenToNinetyNine = require('../lib/tenToNinetyNine');

describe('tenToNinetyNine', function() {
    describe('represent', function() {
        var tenToNinetyNine;
        beforeEach(function() {
            tenToNinetyNine = new TenToNinetyNine();
        });
        it('should return the word for 10', function() {
            var ans = tenToNinetyNine.represent(10);
            assert.equal(ans, 'ten');
        });
        it('should return the word for 13', function() {
            var ans = tenToNinetyNine.represent(13);
            assert.equal(ans, 'thirteen');
        });
        it('should return the word for 20', function() {
            var ans = tenToNinetyNine.represent(20);
            assert.equal(ans, 'twenty');
        });
        it('should return the word for 56', function() {
            var ans = tenToNinetyNine.represent(56);
            assert.equal(ans, 'fifty six');
        });
        it('should return the word for 71', function() {
            var ans = tenToNinetyNine.represent(71);
            assert.equal(ans, 'seventy one');
        });
        it('should return the word for 99', function() {
            var ans = tenToNinetyNine.represent(99);
            assert.equal(ans, 'ninety nine');
        });
        it('should return one for 01', function() {
            var ans = tenToNinetyNine.represent(01);
            assert.equal(ans, 'one');
        });
    });
});
