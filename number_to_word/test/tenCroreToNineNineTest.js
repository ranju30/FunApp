var assert = require('chai').assert;
var TenCroreToNineNine = require('../lib/tenCroreToNineNine');

describe('tenCroreToNineNine', function() {
    describe('represent', function() {
        var tenCroreToNineNine;
        beforeEach(function() {
            tenCroreToNineNine = new TenCroreToNineNine();
        });
        it('should return ten crore for 100000000', function() {
            var ans = tenCroreToNineNine.represent(100000000);
            assert.equal(ans, 'ten crore');
        });
        it('should return ten crore thirty one lakh fifty two thousand three hundred twenty for 103152320', function() {
            var ans = tenCroreToNineNine.represent(103152320);
            assert.equal(ans, 'ten crore thirty one lakh fifty two thousand three hundred twenty');
        });
        it('should return twenty crore fifteen lakh nine thousand seven hundred twenty for 201509720', function() {
            var ans = tenCroreToNineNine.represent(201509720);
            assert.equal(ans, 'twenty crore fifteen lakh nine thousand seven hundred twenty');
        });
        it('should return fifty six crore nineteen lakh three thousand two hundred forty seven for 561903247', function() {
            var ans = tenCroreToNineNine.represent(561903247);
            assert.equal(ans, 'fifty six crore nineteen lakh three thousand two hundred forty seven');
        });
        it('should return seventy crore eighteen lakh thirty six thousand four hundred thirty seven for 701836437', function() {
            var ans = tenCroreToNineNine.represent(701836437);
            assert.equal(ans, 'seventy crore eighteen lakh thirty six thousand four hundred thirty seven');
        });
        it('should return ninety nine crore eighty one lakh three thousand seven hundred ninety four for 998103794', function() {
            var ans = tenCroreToNineNine.represent(998103794);
            assert.equal(ans, 'ninety nine crore eighty one lakh three thousand seven hundred ninety four');
        });
        it('should return one for 000000001', function() {
            var ans = tenCroreToNineNine.represent(000000001);
            assert.equal(ans, 'one');
        });
        it('should return ten crore one for 100000001', function() {
            var ans = tenCroreToNineNine.represent(100000001);
            assert.equal(ans, 'ten crore one');
        });
    });
});
