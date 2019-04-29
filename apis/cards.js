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
    }

}


module.exports = cardApi;

// Card.create({cardPrompt: req.body.cardPrompt,
//     cardAnswer: req.body.cardAnswer,
//     correctAnswerStreak: 0,
//     lastStreakDate: Date.now(),
//     parentTopic: req.params.topicId}).then( newCard => 
//     })