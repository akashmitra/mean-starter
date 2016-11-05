// Injecting Logger Module
var logger = require('../log');
var User = require('../models/usermodel');


exports.addUserConnect = function(req, res) {
	var success;

    var newUser = new User({
        'username': req.body.username,
        'password': req.body.password,
        'firstname': req.body.firstname,
        'lastname': req.body.lastname
    });


    newUser.save(function(err) {
         if (err) {throw err;}
    })
    .then(function(){
        console.log('Inside execture');
        req.body.status = "success";
        res.end(JSON.stringify(req.body));
    });


}
