var http = require('http');

var options = {
    hostname:'localhost',
    port:'1337'
};

function handleResponse(response){
    //서버로 부터 응답을 받았을때 발생하는 response 메소드
    var serverData = '';
    response.on('data',function(chunk){
        //data 이벤트 이름 . 타입 , on 메소드는 이벤트를 연결하는 메소드
    });
    response.on('end',function(){
        console.log('Response Status:' , response.statusCode);
        console.log('response Headers: ',response.headers);
        console.log(serverData);
    });
}

http.request(options,function(response){
    handleResponse(response);
}).end();