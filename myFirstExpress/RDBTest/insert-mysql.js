var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'wlsdls9497'
});

connection.connect();

connection.query('create database nodejs',function(err){
    if(err){
        throw err;
    }
});

connection.query('USE nodejs');
connection.query('create table family'+'(id int(3) auto_increment,'
                +'name varchar(20),primary key(id))');

connection.query('insert into family (name) values(?)','chris');
connection.query('insert into family (name) values(?)','jihee');
connection.query('insert into family (name) values(?)','anna');
connection.query('insert into family (name) values(?)','shinhoo');

connection.query('select * from family',function(err,results,fields){
    if(err){
        throw err;
    }
    console.log(results);
    console.log(fields);
});
connection.end;