let express = require('express')
let router = express.Router()

router.get('/',function(req,res){
    res.send('<h1>heroku test</h1>');
});

module.exports = router