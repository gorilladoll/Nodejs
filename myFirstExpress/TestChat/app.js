// create express module object
var express = require("express");
var app = express();
var server = require("http").createServer(app);
//create socket.io Object

var io = require("socket.io").listen(server);

//Create fs for File Trnasfer and create path for set FilePath
var fs = rquire('fs');
var path = require('path');

app.set('port',3000);
app.use(express,favicon());


app.use(express.bodyParser());
app.use(express.static(path.join(__dirname,'public')));
app.start = app.listen = function(){
    return server.listen.apply(server,arguments);
};
app.start(app.get('port'),function(){
    console.log('서버시작');
});
//use fs object, add service at style of include

function include(file_){
    with(global){
        eval(fs.readFileSync(file_)+'');
    };
};

//add config file
include(__dirname + "/config/include.js");

//add Service file
for(var i = 0; i < servicefile.length;i++){
    include(__dirname+'/service/'+servicefile[i]);
}

// process all http request
app.all("*",function(req,res,next){
    //Biz logic
    next();
});

