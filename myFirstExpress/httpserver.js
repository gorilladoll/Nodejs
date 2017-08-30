var http = require('http');
//http module의 import

http.createServer(function (req,res){
    //웹 서버로부터 객체 생성(create server) , client로 부터 request가 있을 경우 callback함수 정의
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World\n');
}).listen(1337,'127.0.0.1');
//callback 함수 내부
//header 설정(response code, 출력헤더)
//전송된 메세지를 파라미터로 전송 완료(end)
console.log('Server running at http://127.0.0.1');
//생성된 웹 서버 객체의 접속 대기 설정