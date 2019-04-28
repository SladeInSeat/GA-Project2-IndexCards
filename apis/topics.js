const Topic = require("../models/Topic.js")

const topicApi = {

    renderAllTopics: function (req,res){
        Topic.find().then(allTopics => {
            res.render("../views/showTopics", {allTopics})
        });
    },

    renderSingleTopic: function(req,res){
        Topic.findById(req.params.topicId)
    },
};

module.exports = topicApi;