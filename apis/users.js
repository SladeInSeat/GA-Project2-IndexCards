const User = require('../models/User.js')

const userApi = {

    renderAllUsers: function(req,res){
        User.find().then(allUsers => {
            res.render('../views/users', {allUsers})
        })
    }
};

module.exports = userApi;