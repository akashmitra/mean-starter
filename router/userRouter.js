(function () {
    // Injecting Logger Module
    var logger = require('../log');
    var helper = require('../helper/userHelper');

    exports.addUser = function (req, res) {
        var success = helper.addUserConnect(req, res);
    }

}());
