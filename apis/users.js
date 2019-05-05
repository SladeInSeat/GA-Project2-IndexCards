const User = require("../models/User.js")

const userApi = {

    renderAllUsers: function(req,res){
        User.find().then(allUsers => {
            res.render("showUsers", {allUsers} )
        });
    },

    renderLandingPage: function(req,res){
        res.render("landing");
    },

    createUser: function(req,res){
        User.create({userName: req.body.userName,
                    lastLogInDate: Date.now()
                    }).then( () => {
            res.redirect("/showUsers")
        });
    },

    renderSingleUser: function(req,res){ 
        User.findById(req.params.userId).then(user => {
            res.render("showSingleUser", {user} )
        });
    },

    renderUserEdit: function(req,res){
        User.findById(req.params.userId).then(user => {
            res.render("editUser", {user} )
        });
    },

    updateUser: function(req,res){
        User.findByIdAndUpdate(req.params.userId, {$set: req.body}, {new:true}).then( user => {
            res.redirect(`/${user._id}`)
        });
    },

    deleteUser: function(req,res){
        User.findByIdAndDelete(req.params.userId).then( () => {
            res.redirect("/showUsers")
        })
    }

};

module.exports = userApi;