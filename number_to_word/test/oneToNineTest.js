var assert = require('chai').assert;
var OneToNine = require('../lib/oneToNine');

describe('oneToNine', function() {
    describe('represent', function() {
        var oneToNine;
        beforeEach(function() {
            oneToNine = new OneToNine();
        });
        it('should return empty for 0', function() {
            var ans = oneToNine.represent(0);
            assert.equal(ans, '');
        });
        it('should return one for 1', function() {
            var ans = oneToNine.represent(1);
            assert.equal(ans, 'one');
        });
        it('should return two for 2', function() {
            var ans = oneToNine.represent(2);
            assert.equal(ans, 'two');
        });
        it('should return five for 5', function() {
            var ans = oneToNine.represent(5);
            assert.equal(ans, 'five');
        });
        it('should return seven for 7', function() {
            var ans = oneToNine.represent(7);
            assert.equal(ans, 'seven');
        });
        it('should return nine for 9', function() {
            var ans = oneToNine.represent(9);
            assert.equal(ans, 'nine');
        });
    });
});
