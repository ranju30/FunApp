var assert = require('chai').assert;
var TenLakhToSevenNine = require('../lib/tenLakhToSevenNine');

describe('tenLakhToSevenNine', function() {
    describe('represent', function() {
        var tenLakhToSevenNine;
        beforeEach(function() {
            tenLakhToSevenNine = new TenLakhToSevenNine();
        });
        it('should return the word for 1000000', function() {
            var ans = tenLakhToSevenNine.represent(1000000);
            assert.equal(ans, 'ten lakh');
        });
        it('should return the word for 1031320', function() {
            var ans = tenLakhToSevenNine.represent(1031320);
            assert.equal(ans, 'ten lakh thirty one thousand three hundred twenty');
        });
        it('should return the word for 2010720', function() {
            var ans = tenLakhToSevenNine.represent(2010720);
            assert.equal(ans, 'twenty lakh ten thousand seven hundred twenty');
        });
        it('should return the word for 5613247', function() {
            var ans = tenLakhToSevenNine.represent(5613247);
            assert.equal(ans, 'fifty six lakh thirteen thousand two hundred fourty seven');
        });
        it('should return the word for 7013437', function() {
            var ans = tenLakhToSevenNine.represent(7013437);
            assert.equal(ans, 'seventy lakh thirteen thousand four hundred thirty seven');
        });
        it('should return the word for 9981094', function() {
            var ans = tenLakhToSevenNine.represent(9981094);
            assert.equal(ans, 'ninety nine lakh eighty one thousand ninety four');
        });
        it('should return the word for 0000001', function() {
            var ans = tenLakhToSevenNine.represent(0000001);
            assert.equal(ans, 'one');
        });
        it('should return the word for 1000001', function() {
            var ans = tenLakhToSevenNine.represent(1000001);
            assert.equal(ans, 'ten lakh one');
        });
    });
});
