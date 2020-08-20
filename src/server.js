var app = require('./app');
var http = require('http');

var port = 3000;
app.set('port', port);
var server = http.createServer(app);
server.listen(port);

server.on('error', (error) => console.log(error));
server.on('listening', () => console.log('Server Up and Running'));
