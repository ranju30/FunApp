var Zero = require('./Zero');
var OneToNine = require('./OneToNine');
var TenToNinetyNine = require('./TenToNinetyNine');
var HundredToNineNinetyNine = require('./HundredToNineNinetyNine');
var ThousandToFourNine = require('./thousandToFourNine');
var TenThousandToFiveNine = require('./tenThousandToFiveNine');
var OneLakhToSixNine = require('./oneLakhToSixNine');

var zero = new Zero();
var oneToNine = new OneToNine();
var tenToNinetyNine = new TenToNinetyNine();
var hundredToNineNinetyNine = new HundredToNineNinetyNine();
var thousandToFourNine = new ThousandToFourNine();
var tenThousandToFiveNine = new TenThousandToFiveNine();
var oneLakhToSixNine = new OneLakhToSixNine();

var representer = [, oneToNine, tenToNinetyNine, hundredToNineNinetyNine, thousandToFourNine, tenThousandToFiveNine, oneLakhToSixNine]

var ToWord = function() {
    this.represent = function(number) {
        if (zero.isZero(number)) return zero.represent();
        length = number.toString().length;
        return representer[length].represent(number);
    }
}

module.exports = ToWord;
