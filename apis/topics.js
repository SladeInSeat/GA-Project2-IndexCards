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
    },

    createTopic: function(req,res){
        Topic.create({topicName: req.body.topicName,
                        topicDescription: req.body.topicDescription,
                        parentUser: req.params.userId,
                        lastCompletedDate: Date.now()}).then( () => {
                            res.redirect(`/${req.params.userId}/showTopics`)
                        });
    },

    deleteTopic: function(req,res){
        Topic.findByIdAndDelete(req.body.topicId).then( () => {
            res.redirect(`/${req.params.userId}`)
        });
    }
};

module.exports = topicApi;
