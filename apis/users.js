const User = require("../models/User.js")

const userApi = {

    renderAllUsers: function(req,res){
        User.find().then(allUsers => {
            res.render("../views/showUsers", {allUsers} )
        });
    },

    renderLandingPage: function(req,res){
        res.render("../views/landing");
    },

    createUser: function(req,res){
        User.create(req.body).then( () => {
            res.redirect("/showUsers")
        });
    },

    renderSingleUser: function(req,res){ 
        User.findById(req.params.id).then(user => {
            res.render("../views/showSingleUser", {user} )
        });
    },

    renderUserEdit: function(req,res){
        User.findById(req.params.id).then(user => {
            res.render("../views/editUser", {user} )
        });
    },

    updateUser: function(req,res){
        User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true}).then( user => {
            res.redirect(`/${user._id}`)
        });
    }

};

module.exports = userApi;