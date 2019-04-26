const User = require('../models/User.js')

const userApi = {
    showAllUsers: function(req,res){
        User.find().
        then(users =>{
            res.show(users);
            }
        )
    }

};

module.exports = userApi;