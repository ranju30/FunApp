var _ = require('lodash');

var Zero = require('../lib/zero');
var TenToNinetyNine = require('./tenToNinetyNine');
var TenThousandToFiveNine = require('./tenThousandToFiveNine');

var zero = new Zero();
var tenToNinetyNine = new TenToNinetyNine();
var tenThousandToFiveNine = new TenThousandToFiveNine();

var TenLakhToSevenNine = function() {
    this.represent = function(number) {
        if (zero.isZero(number)) return '';
        if (tenToNinetyNine.represent(Math.trunc(number / 100000)) == '') return _.trim(tenThousandToFiveNine.represent(number % 100000));
        return _.trim(tenToNinetyNine.represent(Math.trunc(number / 100000)) + " lakh " + tenThousandToFiveNine.represent(number % 100000));
    }
}

module.exports = TenLakhToSevenNine;
