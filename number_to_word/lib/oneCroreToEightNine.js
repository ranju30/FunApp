var _ = require('lodash');

var Zero = require('../lib/zero');
var OneToNine = require('./oneToNine');
var TenLakhToSevenNine = require('./tenLakhToSevenNine');

var zero = new Zero();
var oneToNine = new OneToNine();
var tenLakhToSevenNine = new TenLakhToSevenNine();

var OneCroreToEightNine = function() {
    this.represent = function(number) {
        if (zero.isZero(number)) return '';
        if (oneToNine.represent(Math.trunc(number / 10000000)) == '') return _.trim(tenLakhToSevenNine.represent(number % 10000000));
        return _.trim(oneToNine.represent(Math.trunc(number / 10000000)) + " crore " + tenLakhToSevenNine.represent(number % 10000000));
    }
}

module.exports = OneCroreToEightNine;
