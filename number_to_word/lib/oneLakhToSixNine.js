var _ = require('lodash');

var Zero = require('../lib/zero');
var OneToNine = require('./oneToNine');
var TenThousandToFiveNine = require('./tenThousandToFiveNine');

var zero = new Zero();
var oneToNine = new OneToNine();
var tenThousandToFiveNine = new TenThousandToFiveNine();

var OneLakhToSixNine = function() {
    this.represent = function(number) {
        if (zero.isZero(number)) return '';
        if (oneToNine.represent(Math.trunc(number / 100000)) == '') return _.trim(tenThousandToFiveNine.represent(number % 100000));
        return _.trim(oneToNine.represent(Math.trunc(number / 100000)) + " lakh " + tenThousandToFiveNine.represent(number % 100000));
    }
}

module.exports = OneLakhToSixNine;
