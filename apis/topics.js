const Topic = require("../models/Topic.js")

const topicApi = {

    renderAllTopics: function (req, res) {
        Topic.find({ parentUser: req.params.parentUserId }).then(allTopics => {
            let = parentUserId = req.params.parentUserId
            res.render("showTopics", { allTopics, parentUserId })
        });
    },

    renderSingleTopic: function (req, res) {
        Topic.findById(req.params.topicId).then(topic => {
            res.render("showSingleTopic", { topic })
        });
    },

    renderCreateTopic: function (req, res) {
        let userId = req.params.userId
        res.render("createTopic", { userId })
    },

    createTopic: function (req, res) {
        Topic.create({
            topicName: req.body.topicName,
            topicDescription: req.body.topicDescription,
            parentUser: req.params.userId,
            lastCompletedDate: Date.now()
        }).then(() => {
            res.redirect(`/${req.params.userId}/showTopics`)
        });
    },

    deleteTopic: function (req, res) {
        Topic.findByIdAndDelete(req.body._id).then(() => {
            res.redirect(`/${req.params.userId}`)
        });
    },

    renderTopicEdit: function (req, res) {
        Topic.findById(req.params.topicId).then(topic => {
            res.render("editTopic", { topic })
        });
    },

    updateTopic: function (req, res) {
        Topic.findByIdAndUpdate(req.params.topicId, {
            $set: {
                topicName: req.body.topicName,
                topicDescription: req.body.topicDescription
            }
        }, { new: true }).then(() => {
            res.redirect(`/${req.params.userId}/showTopics`)
        });
    }
};

module.exports = topicApi;
