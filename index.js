/**
 * index.js
 * Application entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license ISC
 */
'use strict';

var express = require('express'),
    www = require('./lib/gistsy-www');

var app = express();

app.use('/', www);

module.exports = app;

