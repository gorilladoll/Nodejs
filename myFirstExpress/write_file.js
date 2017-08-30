var fs = require('fs'),data = 'Test~ Hello Im Node.js';

fs.writeFile('DataSaveEx.txt',data,function(err){
    if(!err){
        console.log('Success Save Data');
    } else {
        throw err;
    }
});