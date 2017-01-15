var Zero = require('../lib/zero');
var zero = new Zero();

var OneToNine = function() {
    var oneToNine = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }
    this.represent = function(number) {
        if (zero.isZero(number)) return '';
        return oneToNine[number];
    }
}

module.exports = OneToNine;
