var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// app.use(express.favicon());
server.listen(8000);
app.get('/',function(req,res){
    res.sendfile(__dirname+'si_test.html');
});

io.sockets.on('connection',function(socket){
    socket.emit('news',{hello:'world'});
    socket.on('my other event',function(data){
        console.log('data: '+data);
    });
});
// get 방식 처리