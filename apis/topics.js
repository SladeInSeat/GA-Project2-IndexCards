const Topic = require("../models/Topic.js")

const topicApi = {
    renderAllTopics: function (req,res){
        Topic.find().then( topics => {
            res.render("../views/showTopics", topics)
        })
    },

    renderSingleTopic: function(req,res){
        Topic.findById(req.params.topicId)
    },


};

module.exports = topicApi;