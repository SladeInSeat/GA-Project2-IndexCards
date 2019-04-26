const mongoose = require('../db/connection.js');

const userSchema = mongoose.Schema({
    userName: String,
    lastLogInDate: Date
});

let User = mongoose.model('User',userSchema);

module.exports = User;