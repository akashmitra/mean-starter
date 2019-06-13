(function () {

    const express  = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const http = require('http');

    const db = require('./models/db');
    const logger = require('./log');
    const router = require('./router/userRouter');


    const port = process.env.PORT || 3000;
    process.env.DEBUG = 'phaser:debug';

    var app = express();
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));


    app.post('/adduser', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        router.addUser(req, res);
    });


    // Creating a server at port 
    http.createServer(app).listen(port, () => {
        logger.trace(`Express server listening on port ${port}`);
    });


}());


