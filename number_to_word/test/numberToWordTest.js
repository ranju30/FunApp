var assert = require('chai').assert;
var ToWord = require('../lib/numberToWord');

describe('represent',function(){
	it('should represent zero for a single zero',function(){
		var toWord = new ToWord();
		var inWord = toWord.represent(0);
		assert.equal(inWord,'zero');
	});
	it('should represent zero for a multiple zero',function(){
		var toWord = new ToWord();
		var inWord = toWord.represent(000);
		assert.equal(inWord,'zero');
	});
});


