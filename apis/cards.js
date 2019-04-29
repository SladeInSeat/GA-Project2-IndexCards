const Card = require("../models/Card.js")

const cardApi = {

    renderAllCards: function(req,res){
        Card.find({parentTopic : req.params.topicId }).then( allCards => {
            res.render("../views/showCards", {allCards})
        });
    },

    renderSingleCard: function(req,res){
        Card.findById(req.params.cardId).then( card => {
            res.render("../views/showSingleCard", {card})
        })
    },

    renderCreateCard: function(req,res){
        let topicId = req.params.topicId
        res.render("../views/createCard", {topicId})
    },

    createCard: function(req,res){
        Card.create({cardPrompt: req.body.cardPrompt,
            cardAnswer: req.body.cardAnswer,
            correctAnswerStreak: 0,
            lastStreakDate: Date.now(),
            parentTopic: req.params.topicId}).then( card => {
                res.render("../views/showSingleCard", {card})
            });
    },

    deleteCard: function(req,res){
        Card.findByIdAndDelete(req.body._id).then( () => {
            res.redirect(`/`)
        })
    }

}


module.exports = cardApi;

