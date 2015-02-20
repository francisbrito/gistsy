/**
 * scripts/server.js
 * Stand-alone application server.
 *
 * @author Francis Brito <fr.br94@gmail.com>
 * @license ISC
 */
'use strict';

var PORT = process.env.NODE_PORT || 3000;

require('../').listen(PORT);

console.log('Listening at localhost:' + PORT);
