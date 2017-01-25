var assert = require('chai').assert;
var OneCroreToEightNine = require('../lib/oneCroreToEightNine');

describe('oneCroreToEightNine', function() {
    describe('represent', function() {
        var oneCroreToEightNine;
        beforeEach(function() {
            oneCroreToEightNine = new OneCroreToEightNine();
        });
        it('should return one crore for 10000000', function() {
            var ans = oneCroreToEightNine.represent(10000000);
            assert.equal(ans, 'one crore');
        });
        it('should return one crore three lakh twelve thousand three hundred twenty for 10312320', function() {
            var ans = oneCroreToEightNine.represent(10312320);
            assert.equal(ans, 'one crore three lakh twelve thousand three hundred twenty');
        });
        it('should return two crore one lakh fifty thousand seven hundred twenty for 20150720', function() {
            var ans = oneCroreToEightNine.represent(20150720);
            assert.equal(ans, 'two crore one lakh fifty thousand seven hundred twenty');
        });
        it('should return five crore sixty one lakh ninety three thousand two hundred forty seven for 56193247', function() {
            var ans = oneCroreToEightNine.represent(56193247);
            assert.equal(ans, 'five crore sixty one lakh ninety three thousand two hundred forty seven');
        });
        it('should return seven crore one lakh eighty three thousand four hundred thirty seven for 70183437', function() {
            var ans = oneCroreToEightNine.represent(70183437);
            assert.equal(ans, 'seven crore one lakh eighty three thousand four hundred thirty seven');
        });
        it('should return nine crore ninety eight lakh ten thousand seven hundred ninety four for 99810794', function() {
            var ans = oneCroreToEightNine.represent(99810794);
            assert.equal(ans, 'nine crore ninety eight lakh ten thousand seven hundred ninety four');
        });
        it('should return one for 00000001', function() {
            var ans = oneCroreToEightNine.represent(00000001);
            assert.equal(ans, 'one');
        });
        it('should return the word for 10000001', function() {
            var ans = oneCroreToEightNine.represent(10000001);
            assert.equal(ans, 'one crore one');
        });
    });
});
