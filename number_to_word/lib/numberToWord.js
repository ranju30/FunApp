var Zero = require('./Zero');
var zero = new Zero();


var ToWord = function(){
  this.represent = function(number){
    if(zero.isZero(number)) return zero.represent();
  }
}

module.exports = ToWord;