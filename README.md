# Gistsy

> A PasteBin-like pastes service built using Polymer and Express.

This project goals is to provide a hands-on learning experience for Polymer.  

## Requirements

1. (Node.js)[http://nodejs.org] 0.10.33+

## Installing
`npm install git+https://github.com/francisbrito/gistsy`

## Usage

### Package

```js
var express = require('express'),
    gistsy = require('gistsy');

var app = express();

// Mount gistsy at the root path.
app.use('/', gistsy);

app.listen(3000);
```

### Stand-alone server

```bash
$ git clone https://francisbrito/gistsy
$ cd gistsy
$ npm install
$ npm run server
```
