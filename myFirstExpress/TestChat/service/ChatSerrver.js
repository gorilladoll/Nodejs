io.sockets.on('connection',function(socket){
    socket.on('roommake',function(data){
        socket.join(data.roomname);
        socket.roomnum = data.roomnum;

        io.sockets.emit('roomlist',{
                                    "roomdata" : io.sockets.adapter.rooms,
                                    "clientid": socket.id,
                                    "roomname": data.roomname,
                                    "nickname": data.nickname
                                    });
    });
});