var http = require('http');
var url = require('url');
http.createServer(function(req,res){
    var uri = req.url;
    var query = url.parse(uri,true).query;
    if(req.method == 'GET'){
        res.writeHead(200,{"Content-type" : "text/html"});
        res.end("ID:" + query.id + 'pwd:' + query.pwd);
    } else if(req.method == 'POST'){
        req.on('data',function(chunck){
                console.log(chunck.toString());
                var data = querystring.parse(chunck.toString());
                res.writeHead(200,{'Content-Type' : 'text/html'});
                res.end('id:' + data.id + 'pwd' + data.pwd);
        });
    }
}).listen(1337,function(){
    console.log('server running on 1337');
});