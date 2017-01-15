var assert = require('chai').assert;
var ThousandToFourNine = require('../lib/thousandToFourNine');

describe('thousandToFourNine', function() {
    describe('represent', function() {
        var thousandToFourNine;
        beforeEach(function() {
            thousandToFourNine = new ThousandToFourNine();
        });
        it('should return the word for 1000', function() {
            var ans = thousandToFourNine.represent(1000);
            assert.equal(ans, 'one thousand');
        });
        it('should return the word for 1332', function() {
            var ans = thousandToFourNine.represent(1332);
            assert.equal(ans, 'one thousand three hundred thirty two');
        });
        it('should return the word for 2020', function() {
            var ans = thousandToFourNine.represent(2020);
            assert.equal(ans, 'two thousand twenty');
        });
        it('should return the word for 5647', function() {
            var ans = thousandToFourNine.represent(5647);
            assert.equal(ans, 'five thousand six hundred fourty seven');
        });
        it('should return the word for 7137', function() {
            var ans = thousandToFourNine.represent(7137);
            assert.equal(ans, 'seven thousand one hundred thirty seven');
        });
        it('should return the word for 9989', function() {
            var ans = thousandToFourNine.represent(9989);
            assert.equal(ans, 'nine thousand nine hundred eighty nine');
        });
        it('should return the word for 0001', function() {
            var ans = thousandToFourNine.represent(0001);
            assert.equal(ans, 'one');
        });
    });
});
