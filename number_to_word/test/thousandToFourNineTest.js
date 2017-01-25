var assert = require('chai').assert;
var ThousandToFourNine = require('../lib/thousandToFourNine');

describe('thousandToFourNine', function() {
    describe('represent', function() {
        var thousandToFourNine;
        beforeEach(function() {
            thousandToFourNine = new ThousandToFourNine();
        });
        it('should return one thousand for 1000', function() {
            var ans = thousandToFourNine.represent(1000);
            assert.equal(ans, 'one thousand');
        });
        it('should return one thousand three hundred thirty two for 1332', function() {
            var ans = thousandToFourNine.represent(1332);
            assert.equal(ans, 'one thousand three hundred thirty two');
        });
        it('should return two thousand twenty for 2020', function() {
            var ans = thousandToFourNine.represent(2020);
            assert.equal(ans, 'two thousand twenty');
        });
        it('should return five thousand six hundred forty seven for 5647', function() {
            var ans = thousandToFourNine.represent(5647);
            assert.equal(ans, 'five thousand six hundred forty seven');
        });
        it('should return seven thousand one hundred thirty seven for 7137', function() {
            var ans = thousandToFourNine.represent(7137);
            assert.equal(ans, 'seven thousand one hundred thirty seven');
        });
        it('should return nine thousand nine hundred eighty nine for 9989', function() {
            var ans = thousandToFourNine.represent(9989);
            assert.equal(ans, 'nine thousand nine hundred eighty nine');
        });
        it('should return one for 0001', function() {
            var ans = thousandToFourNine.represent(0001);
            assert.equal(ans, 'one');
        });
    });
});
