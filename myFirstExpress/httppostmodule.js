var http = require('http');

var options = {
    homename : '127.0.0.1',
    port : 1337,
    path : '/',
    method : 'POST'
}

var req = http.request(options , function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data',function (chunk){
        console.log('BODY:' + chunk);
    });
});

req.on('error',function(e){
    console.log('problem with request: ' + e.message);
});

req.write('11111data11111111111\n');
req.end();