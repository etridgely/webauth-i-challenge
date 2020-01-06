const { Router, urlencoded, json } = require('express');
const userRouter = require('./users/user-router.js');

const server = Router();

server.use('/api', json());
server.use('/api', urlencoded({extended: false}));
server.use('/api', userRouter);

module.exports = server;