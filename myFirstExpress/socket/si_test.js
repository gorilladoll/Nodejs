// var io = require('socket.io').listen(3000);
// //  80포트로 연결대기 하는 서버 객체

// io.sockets.on('connection',function(socket){
//     //sockets : 서버에서 클라이언트들의 socket 객체 저장을 하는 배열객체
//     //socket : 현재 서비스 요청을 한 클라이언트의 socket 객체

//     socket.emit('news',{hello:'영진전문대학'})
//     //emit은 자신이 정의한 객체를 던질 시 뒤에 배열의 형태로 값을 받아온다

//     socket.on('blabla',function(data){
//         console.log(data.my+"처리한 결과임...");
//     });
// });


var app = require('http').createServer(handler);
var fs = require('fs');
var io = require('socket.io').listen(app);

app.listen(3000)

function handler(req,res){
    fs.readFile(__dirname + '/si_test.html',
    function(err,data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
        }

        res.writeHead(200);
        res.end(data);
    });
}

io.sockets.on('connection',function(socket) {
    socket.emit('news', {hello:'world'});
    socket.on('my other event', function(data){
        console.log(data);
    });
});