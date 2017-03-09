(function () {

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    // Create a schema
    var userSchema = new Schema({
        username: String,
        password: String,
        firstname: String,
        lastname: String
    }, {
        collection: 'users'
    });

    // Create a model
    var User = mongoose.model('Overview', userSchema);

    // Make model available
    module.exports = User;

}());





