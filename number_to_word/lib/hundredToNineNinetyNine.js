var _ = require('lodash');
var OneToNine = require('./OneToNine');
var TenToNinetyNine = require('./TenToNinetyNine');

var oneToNine = new OneToNine();
var tenToNinetyNine = new TenToNinetyNine();

var HundredToNineNinetyNine = function(){
  this.represent = function(number) {
    return _.trim(oneToNine.represent(Math.trunc(number/100)) + " hundred " + tenToNinetyNine.represent(Math.trunc(number%100)));
  }
}

module.exports = HundredToNineNinetyNine;
