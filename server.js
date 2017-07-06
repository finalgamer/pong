#!node
var io = require('socket.io')(6001);


io.on('connection', function(socket){
    console.log('a client connected');
    socket.on('controller2', (data) => {
        socket.broadcast.emit('controller2', data * 3);
        console.log(data);
    });

    socket.on('controller1', (data) => {
        socket.broadcast.emit('controller1', data * 3);
        console.log(data);
    });
});


