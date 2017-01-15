var _ = require('lodash');
var OneToNine = require('./OneToNine');
var oneToNine = new OneToNine();

var TenToNinetyNine = function(){
  var tenToTwenty = {00:'',10:'ten',11:'eleven',12:'twelve',13:'thirteen',14:'fourteen',15:'fifteen',16:'sixteen',17:'seventeen',18:'eighteen',19:'nineteen',20:'twenty'}
  var aboveTwenty = {2:'twenty',3:'thirty',4:'fourty',5:'fifty',6:'sixty',7:'seventy',8:'eighty',9:'ninety'};
  this.represent = function(number) {
    if(number <= 20 ) return tenToTwenty[number];
    return _.trim(aboveTwenty[Math.trunc(number/10)] +" "+ oneToNine.represent(Math.trunc(number%10)));
  }
}

module.exports = TenToNinetyNine;