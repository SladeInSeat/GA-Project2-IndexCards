const Card = require("../models/Card.js")

const cardApi = {

    renderAllCards: function(req,res){
        Card.find().then(allCards => {
            res.render("../views/showCards", allCards)
        });
    }

}


module.exports = cardApi;