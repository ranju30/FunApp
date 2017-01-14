var Zero = function(){
	this.isZero = function(number) {
		return +(number.toString().split('').reduce(function(a,b){return a+b})) === 0;
	}
	this.represent = function(){
		return 'zero';
	}
};

module.exports = Zero;