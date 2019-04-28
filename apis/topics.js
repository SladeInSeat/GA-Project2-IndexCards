const Topic = require("../models/Topic.js")

const topicApi = {

    renderAllTopics: function (req,res){
        Topic.find({parentUser: req.params.parentId}).then(allTopics => {
            res.render("../views/showTopics", {allTopics})
        });
    },

    renderSingleTopic: function(req,res){
        Topic.findById(req.params.topicId).then(topic => {
            res.render("../views/showSingleTopic", {topic})
        });
    },

    // getUserId: function(req,res){
    //     return req.params.userId
    // },

    renderCreateTopic: function(req,res){
        let userId = req.params.userId
        res.render("../views/createTopic",{userId})
    }
};

module.exports = topicApi;