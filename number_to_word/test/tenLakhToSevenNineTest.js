var assert = require('chai').assert;
var TenLakhToSevenNine = require('../lib/tenLakhToSevenNine');

describe('tenLakhToSevenNine', function() {
    describe('represent', function() {
        var tenLakhToSevenNine;
        beforeEach(function() {
            tenLakhToSevenNine = new TenLakhToSevenNine();
        });
        it('should return ten lakh for 1000000', function() {
            var ans = tenLakhToSevenNine.represent(1000000);
            assert.equal(ans, 'ten lakh');
        });
        it('should return ten lakh thirty one thousand three hundred twenty for 1031320', function() {
            var ans = tenLakhToSevenNine.represent(1031320);
            assert.equal(ans, 'ten lakh thirty one thousand three hundred twenty');
        });
        it('should return twenty lakh ten thousand seven hundred twenty for 2010720', function() {
            var ans = tenLakhToSevenNine.represent(2010720);
            assert.equal(ans, 'twenty lakh ten thousand seven hundred twenty');
        });
        it('should return fifty six lakh thirteen thousand two hundred forty seven for 5613247', function() {
            var ans = tenLakhToSevenNine.represent(5613247);
            assert.equal(ans, 'fifty six lakh thirteen thousand two hundred forty seven');
        });
        it('should return seventy lakh thirteen thousand four hundred thirty seven for 7013437', function() {
            var ans = tenLakhToSevenNine.represent(7013437);
            assert.equal(ans, 'seventy lakh thirteen thousand four hundred thirty seven');
        });
        it('should return ninety nine lakh eighty one thousand ninety four for 9981094', function() {
            var ans = tenLakhToSevenNine.represent(9981094);
            assert.equal(ans, 'ninety nine lakh eighty one thousand ninety four');
        });
        it('should return one for 0000001', function() {
            var ans = tenLakhToSevenNine.represent(0000001);
            assert.equal(ans, 'one');
        });
        it('should return ten lakh one for 1000001', function() {
            var ans = tenLakhToSevenNine.represent(1000001);
            assert.equal(ans, 'ten lakh one');
        });
    });
});
