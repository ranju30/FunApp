var _ = require('lodash');

var Zero = require('../lib/zero');
var TenToNinetyNine = require('./tenToNinetyNine');
var TenLakhToSevenNine = require('./tenLakhToSevenNine');

var zero = new Zero();
var tenToNinetyNine = new TenToNinetyNine();
var tenLakhToSevenNine = new TenLakhToSevenNine();

var TenCroreToNineNine = function() {
    this.represent = function(number) {
        if (zero.isZero(number)) return '';
        if (tenToNinetyNine.represent(Math.trunc(number / 10000000)) == '') return _.trim(tenLakhToSevenNine.represent(number % 10000000));
        return _.trim(tenToNinetyNine.represent(Math.trunc(number / 10000000)) + " crore " + tenLakhToSevenNine.represent(number % 10000000));
    }
}

module.exports = TenCroreToNineNine;
