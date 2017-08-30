var http = require('http');

http.get('http://jpdic.naver.com/search.nhn?range=all&q=%ED%99%98%EC%83%81&sm=jpd_hty',
    function(res){
        console.log('Got response: ' + res.statusCode);
        console.log('HEADERS:' + JSON.stringify(res.headers));
    })