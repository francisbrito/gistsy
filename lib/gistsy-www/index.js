/**
 * gistsy-www/index.js
 * Application entry point.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license ISC
 */
'use strict';

var express = require('express'),
    path = require('path');

var PUBLIC_DIR = path.join(__dirname, 'public');

var app = express();

app.use('/', express.static(PUBLIC_DIR));

module.exports = app;
