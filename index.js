var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket) {
	console.log('a user connected.');

	socket.on('nw-chat-app msg', function(msg) {
		console.log('Message : ', msg);
		io.emit('nw-chat-app msg', msg);
	});

	// socket.on('disconnect', function() {
	// 	console.log('user disconnected.');
	// });
});

http.listen(3000, function() {
	console.log('listen on port 3000');
});