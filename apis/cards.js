const Card = require("../models/Card.js")

const cardApi = {

    renderAllCards: function(req,res){
        Card.find({parentTopic : req.params.topicId }).then( allCards => {
            res.render("../views/showCards", {allCards})
        });
    }

}


module.exports = cardApi;