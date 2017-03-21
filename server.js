var express = require('express');
var app = express();
var path = require('path');

var port = process.env.port || 3000;

app.use(express.static(path.join(__dirname)));

app.listen(port,function(){
    console.log('server is running on '+port);
})