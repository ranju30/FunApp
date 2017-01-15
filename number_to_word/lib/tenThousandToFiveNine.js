var _ = require('lodash');

var Zero = require('../lib/zero');
var TenToNinetyNine = require('./tenToNinetyNine');
var HundredToNineNinetyNine = require('./hundredToNineNinetyNine');

var zero = new Zero();
var tenToNinetyNine = new TenToNinetyNine();
var hundredToNineNinetyNine = new HundredToNineNinetyNine();

var ThousandToFourNine = function() {
    this.represent = function(number) {
        if (zero.isZero(number)) return '';
        if (tenToNinetyNine.represent(Math.trunc(number / 1000)) == '') return _.trim(hundredToNineNinetyNine.represent(number % 1000));
        return _.trim(tenToNinetyNine.represent(Math.trunc(number / 1000)) + " thousand " + hundredToNineNinetyNine.represent(number % 1000));
    }
}

module.exports = ThousandToFourNine;
