const User = require("../models/User.js")

const userApi = {

    renderAllUsers: function(req,res){
        User.find().then(allUsers => {
            res.render("../views/showUsers", {allUsers} )
        })
    },

    renderLandingPage: function(req,res){
        res.render("../views/landing")
    },

    createUser: function(req,res){
        User.create(req.body).then( () => {
            res.redirect("/showUsers")
        });
    },

    showSingleUser: function(req,res){ 
        User.find({_id : {"$oid": "5cc39c4452efe70004d7c782"}}).then(user =>{
            res.render("..views/showSingleUser",{user})
        })
    }

};

module.exports = userApi;