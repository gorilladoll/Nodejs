var eventHandler = function(){
    console.log('EXIT');
}

process.on('exit',eventHandler);
process.on('exit',function(){
    console.log('Good Bye~');
});

var errHandler_one = function(e){
    console.log('FirstError',e);
}

var errHandler_two = function(e){
    console.log('SecondError',e);
}

process.on('uncaughtException',errHandler_one);
process.on('uncaughtException',errHandler_two);

// process.removeListner('uncaughtException',errHandler_two);
process.removeAllListeners('uncaughtException');

errTest1