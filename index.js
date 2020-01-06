const express = require('express')();
const server = require('./server.js');

express.use('/', server);

express.listen(8000);