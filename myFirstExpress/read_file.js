var fs = require('fs');

fs.readFile('DataSaveEx.txt','utf8',function(err,data){
    if(!err){
        console.log(data);
    } else {
        throw err;
    }
});