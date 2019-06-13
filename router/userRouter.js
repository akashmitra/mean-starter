// Injecting Logger Module
const logger = require('../log');
const helper = require('../helper/userHelper');

module.exports = {
    addUser: (req, res) => {
        var success = helper.addUserConnect(req, res);
    }
};