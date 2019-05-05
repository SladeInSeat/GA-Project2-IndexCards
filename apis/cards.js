const Card = require("../models/Card.js")
const Topic = require("../models/Topic.js")

const cardApi = {

    renderAllCards: function (req, res) {
        Topic.findById(req.params.topicId).then( topic => {
            Card.find({ parentTopic: req.params.topicId }).then( allCards => {
                res.render("showCards", { topic, allCards})
            });
        });
    },

    renderSingleCard: function (req, res) {
        Card.findById(req.params.cardId).then(card => {
            Topic.findById(card.parentTopic).then(topic => {
                res.render("showSingleCard", { card, topic })
            })
            
        })
    },

    renderCreateCard: function (req, res) {
        let topicId = req.params.topicId
        res.render("createCard", { topicId })
    },

    createCard: function (req, res) {
        Card.create({
            cardPrompt: req.body.cardPrompt,
            cardAnswer: req.body.cardAnswer,
            correctAnswerStreak: 0,
            lastStreakDate: Date.now(),
            parentTopic: req.params.topicId
        }).then( card => {
            Topic.findById(card.parentTopic).then( topic => {
                Card.find({ parentTopic: card.parentTopic}).then( allCards => {
                    res.render("showCards", { topic, allCards})
                });
            });
        });
    },

    deleteCard: function (req, res) {
        Card.findByIdAndDelete(req.body._id).then(() => {
            Topic.findById(req.body.parentTopic).then( topic =>{
                res.render("showSingleTopic", {topic})
            })
        })
    },

    renderCardEdit: function (req, res) {
        Card.findById(req.params.cardId).then(card => {
            res.render("editCard", { card })
        })
    },

    updateCard: function (req, res) {
        Card.findByIdAndUpdate(req.params.cardId, {
            $set: {
                cardPrompt: req.body.cardPrompt,
                cardAnswer: req.body.cardAnswer
            }
        }, { new: true }).then((newCard) => {
            Topic.findById(newCard.parentTopic).then(topicObj => {
                res.redirect(`/${topicObj.parentUser}/topic/${topicObj._id}/cards`)
            })
        });
    },

    getTopic: function(req,res) {
        Topic.find({_id: req.params.topicId}).then( topic => {
            res.render("showSingleTopic", {topic})
        });
    }
}


module.exports = cardApi;

