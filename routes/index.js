let express = require('express')
let router = express.Router()
// require users, topics, cards apis here

let fakeData = {
    name: 'slade'
};

router.get('/',function(req,res){
    res.send(fakeData);
});

module.exports = router 