const logger = require('../log');
const User = require('../models/usermodel');

module.exports = {
    addUserConnect: (req, res) => {
        var success;

        var newUser = new User({
            'username': req.body.username,
            'password': req.body.password,
            'firstname': req.body.firstname,
            'lastname': req.body.lastname
        });

        newUser.save(function (err) {
            if (err) {
                throw err;
            }
        })
            .then(function () {
                logger.trace('Inside execture');
                req.body.status = "success";
                res.end(JSON.stringify(req.body));
            });
    }
};
