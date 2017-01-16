var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var NumberToWord = require('../lib/numberToWord');
var numberToWord = new NumberToWord();

app.use(function(req, res, next) {
    next();
});

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/convert', function(req, res) {
    var number = req.body.number;
    var words = numberToWord.represent(number);
    res.send({
        words: words
    });
});

module.exports = app;
