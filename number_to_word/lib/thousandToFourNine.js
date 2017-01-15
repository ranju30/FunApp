var _ = require('lodash');

var Zero = require('../lib/zero');
var OneToNine = require('./oneToNine');
var HundredToNineNinetyNine = require('./hundredToNineNinetyNine');

var zero = new Zero();
var oneToNine = new OneToNine();
var hundredToNineNinetyNine = new HundredToNineNinetyNine();

var ThousandToFourNine = function() {
    this.represent = function(number) {
        if (zero.isZero(number)) return '';
        if (oneToNine.represent(Math.trunc(number / 1000)) == '') return _.trim(hundredToNineNinetyNine.represent(number % 1000));
        return _.trim(oneToNine.represent(Math.trunc(number / 1000)) + " thousand " + hundredToNineNinetyNine.represent(number % 1000));
    }
}

module.exports = ThousandToFourNine;
