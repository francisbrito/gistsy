/**
 * index.js
 * Application entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license ISC
 */
'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('it works!');
});

app.listen(3000);

console.log('Listening at localhost:3000');
