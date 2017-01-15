var _ = require('lodash');

var Zero = require('../lib/zero');
var OneToNine = require('./OneToNine');
var TenToNinetyNine = require('./TenToNinetyNine');

var zero = new Zero();
var oneToNine = new OneToNine();
var tenToNinetyNine = new TenToNinetyNine();

var HundredToNineNinetyNine = function() {
    this.represent = function(number) {
        if (zero.isZero(number)) return '';
        if (oneToNine.represent(Math.trunc(number / 100)) == '') return _.trim(tenToNinetyNine.represent(Math.trunc(number % 100)));
        return _.trim(oneToNine.represent(Math.trunc(number / 100)) + " hundred " + tenToNinetyNine.represent(Math.trunc(number % 100)));
    }
}

module.exports = HundredToNineNinetyNine;
