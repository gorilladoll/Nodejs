var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'wd3j',
    password: '1234'
});

connection.connect();

connection.query('SELECT "헬로월드"',
  function(err,results,fields){
    console.log(results);
    console.log(fields);
});

connection.end();