var express = require('express'),
    http = require('http'),
    path = require('path'),
    log4js = require('log4js');

var app= express();


var db = require('./models/db');
var logger = require('./log');

var router = require('./router/userRouter');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());


app.post('/adduser', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
   	router.addUser(req, res);
});


/* Server at 80 */
http.createServer(app).listen(80, function() {
    logger.trace("Express server listening on port 80");
});