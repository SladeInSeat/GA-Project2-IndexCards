let express = require('express')
let router = express.Router()
// require user, topic, card apis here

router.get('/',function(req,res){
    res.send('<h1>heroku test</h1>');
});

module.exports = router 