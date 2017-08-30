var io = require('socket.io').listen(8000);

var chat = io.of('/chat').on('connection',function(socket){
    console.log('chat');
    socket.emit('a message',{
        that: 'only',
        '/chat' : 'will get'
    });
    chat.emit('a message',{
        evenyone: 'in',
        '/chat' : 'will get'
    });
});

var news = io.of('/news').on('connecion',function(socket){
    console.log('news');
    socket.emit('item',{
        news: 'item'
    });
});