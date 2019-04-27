const User = require("../models/User.js")

const userApi = {

    renderAllUsers: function(req,res){
        User.find().then(allUsers => {
            res.render("../views/showUsers", {allUsers} )
        })
    },

    renderLandingPage: function(req,res){
        res.render("../views/landing")
    }

    

};

module.exports = userApi;