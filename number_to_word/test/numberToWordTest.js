var assert = require('chai').assert;
var ToWord = require('../lib/numberToWord');

describe('represent', function() {
    it('should represent zero for a single zero', function() {
        var toWord = new ToWord();
        var inWord = toWord.represent(0);
        assert.equal(inWord, 'zero');
    });
    it('should represent zero for a multiple zero', function() {
        var toWord = new ToWord();
        var inWord = toWord.represent(000);
        assert.equal(inWord, 'zero');
    });
    it('should represent number for one', function() {
        var toWord = new ToWord();
        var inWord = toWord.represent(1);
        assert.equal(inWord, 'one');
    });

    it('should represent for number nine', function() {
        var toWord = new ToWord();
        var inWord = toWord.represent(9);
        assert.equal(inWord, 'nine');
    });
    it('should represent for number from 10 to 20', function() {
        var toWord = new ToWord();
        var inWord = toWord.represent(15);
        assert.equal(inWord, 'fifteen');
    });

    it('should represent for number above 20', function() {
        var toWord = new ToWord();
        var inWord = toWord.represent(33);
        assert.equal(inWord, 'thirty three');
    });

    it('should represent for number above 100', function() {
        var toWord = new ToWord();
        var inWord = toWord.represent(330);
        assert.equal(inWord, 'three hundred thirty');
    });

    it('should represent for number above 100', function() {
        var toWord = new ToWord();
        var inWord = toWord.represent(900);
        assert.equal(inWord, 'nine hundred');
    });
});
