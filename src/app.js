var express = require('express');
var path = require('path');

var devicesRouter = require('./routes/devices');
var commandsRouter = require('./routes/commands');
var statusRouter = require('./routes/status');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

devicesRouter.use('/:deviceId/commands', commandsRouter);
app.use('/devices', devicesRouter);

app.use('/status', statusRouter);

module.exports = app;
