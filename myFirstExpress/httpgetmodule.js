var http = require('http');

http.get('http://localhost:1337/',
    function(res) {
        console.log("Got response: " + res.statusCode);
        console.log('HEADERS' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            console.log('BODY' + chunk);
        });
    }).on('error', function(e){
        console.log('Got Error'+e.message);
    });