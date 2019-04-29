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
    }

}


module.exports = cardApi;