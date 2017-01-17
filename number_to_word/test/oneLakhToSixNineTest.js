var assert = require('chai').assert;
var OneLakhToSixNine = require('../lib/oneLakhToSixNine');

describe('oneLakhToSixNine', function() {
    describe('represent', function() {
        var oneLakhToSixNine;
        beforeEach(function() {
            oneLakhToSixNine = new OneLakhToSixNine();
        });
        it('should return the word for 100000', function() {
            var ans = oneLakhToSixNine.represent(100000);
            assert.equal(ans, 'one lakh');
        });
        it('should return the word for 103320', function() {
            var ans = oneLakhToSixNine.represent(103320);
            assert.equal(ans, 'one lakh three thousand three hundred twenty');
        });
        it('should return the word for 201020', function() {
            var ans = oneLakhToSixNine.represent(201020);
            assert.equal(ans, 'two lakh one thousand twenty');
        });
        it('should return the word for 561247', function() {
            var ans = oneLakhToSixNine.represent(561247);
            assert.equal(ans, 'five lakh sixty one thousand two hundred forty seven');
        });
        it('should return the word for 701337', function() {
            var ans = oneLakhToSixNine.represent(701337);
            assert.equal(ans, 'seven lakh one thousand three hundred thirty seven');
        });
        it('should return the word for 998094', function() {
            var ans = oneLakhToSixNine.represent(998094);
            assert.equal(ans, 'nine lakh ninety eight thousand ninety four');
        });
        it('should return the word for 000001', function() {
            var ans = oneLakhToSixNine.represent(000001);
            assert.equal(ans, 'one');
        });
        it('should return the word for 100001', function() {
            var ans = oneLakhToSixNine.represent(100001);
            assert.equal(ans, 'one lakh one');
        });
    });
});
