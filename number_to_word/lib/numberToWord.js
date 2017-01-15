var Zero = require('./Zero');
var OneToNine = require('./OneToNine');
var TenToNinetyNine = require('./TenToNinetyNine');
var HundredToNineNinetyNine = require('./HundredToNineNinetyNine');

var zero = new Zero();
var oneToNine = new OneToNine();
var tenToNinetyNine = new TenToNinetyNine();
var hundredToNineNinetyNine = new HundredToNineNinetyNine();

var representer = [,oneToNine,tenToNinetyNine,hundredToNineNinetyNine]

var ToWord = function(){
  this.represent = function(number){
    if(zero.isZero(number)) return zero.represent();
    length = number.toString().length;
    return representer[length].represent(number);
  }
}

module.exports = ToWord;
