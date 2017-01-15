var assert = require('chai').assert;
var TenThousandToFiveNine = require('../lib/tenThousandToFiveNine');

describe('tenThousandToFiveNine', function() {
    describe('represent', function() {
        var tenThousandToFiveNine;
        beforeEach(function() {
            tenThousandToFiveNine = new TenThousandToFiveNine();
        });
        it('should return the word for 10000', function() {
            var ans = tenThousandToFiveNine.represent(10000);
            assert.equal(ans, 'ten thousand');
        });
        it('should return the word for 13320', function() {
            var ans = tenThousandToFiveNine.represent(13320);
            assert.equal(ans, 'thirteen thousand three hundred twenty');
        });
        it('should return the word for 20020', function() {
            var ans = tenThousandToFiveNine.represent(20020);
            assert.equal(ans, 'twenty thousand twenty');
        });
        it('should return the word for 56147', function() {
            var ans = tenThousandToFiveNine.represent(56147);
            assert.equal(ans, 'fifty six thousand one hundred fourty seven');
        });
        it('should return the word for 70137', function() {
            var ans = tenThousandToFiveNine.represent(70137);
            assert.equal(ans, 'seventy thousand one hundred thirty seven');
        });
        it('should return the word for 99809', function() {
            var ans = tenThousandToFiveNine.represent(99809);
            assert.equal(ans, 'ninety nine thousand eight hundred nine');
        });
        it('should return the word for 00001', function() {
            var ans = tenThousandToFiveNine.represent(00001);
            assert.equal(ans, 'one');
        });
    });
});
