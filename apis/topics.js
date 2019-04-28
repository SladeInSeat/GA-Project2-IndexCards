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
    
    renderCreateTopic: function(req,res){
        res.render("../views/createTopic")
    }
};

module.exports = topicApi;