const User = require('../models/User.js')

const userApi = {
    showAllUsers: function(req,res){
        User.find().
        then(users =>{
            res.show(users);
            }
        )
    },
    
    renderAllUsers: function(req,res){
        User.find().
        then(allUsers => {
            res.render('../views/users', {allUsers})
        })
    }
};

module.exports = userApi;