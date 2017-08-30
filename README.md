# Nodejs
practiced nodejs files
3월 3일 node.js

컨트롤 + 물결

npm install 라이브러리명

npm uninstall 라이브러리명

npm install -g express

npm install -g express-generator

* Scaffolding

express myFirstExpres

cd myFirstExpres

npm install

npm start

http://localhost:3000/

==========================

3월 31일 금요일

JSON 반드시 알아야 하는 것
String -> Object = JSON.pass
Object->String = jSON.stringify

==========================

4월 14일 금요일
﻿brew install mongodb 

vi .bash_profile

export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin

source .bash_profile

mongo --version

mongo

use admin

use admin
db.createUser( { user: "<username>",
          pwd: "<password>",
          roles: [ "userAdminAnyDatabase",
                   "dbAdminAnyDatabase",
                   "readWriteAnyDatabase"
 
] } )

mongo admin -u <username> -p
password:<password>

==========================

4월 28일 MongoDB

Mongod —dbpath 경로
Mongo

db.test.find() :DB 내에 저장된 것 불러오기
mongoDB에서의 ObjectID의 경우 숫자 8자(4바이트)의 경우 타임스탬프

Brew services start mongodb로 스타트

Mongoose 모듈
-npm init
-npm install mongoose —save -g
-npm install

Schema 정의 
- 타입설정: String, Number, Date, Buffer, Boolean, ...  -http://mongoosejs.com/docs/schematypes.html 
-스키마에 메서드를 정의할 수 있다.
