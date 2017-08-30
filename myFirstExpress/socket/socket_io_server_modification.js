var express = require("express");
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');

app.set('port',3000);
app.use(express.static(path.join(__dirname,'public')));

server.listen(app.get('port'),function(){
    console.log(app.get('port'));
});

io.sockets.on("connection",function(socket){
    socket.on('msg',function(data){
        console.log(data);
        setTimeout(function(){
            io.sockets.emit('msg_by_server',"<br/>" + "SRV: " + data);
        },500);
    });
})