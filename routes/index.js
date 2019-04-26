const express = require('express')
const router = express.Router()
const usersApi = require('../apis/users.js')
const topicsApi = require('../apis/topics.js')
const cardsApi = require('../apis/cards.js')


// let fakeData = {
//     name: 'slade'
// };

// router.get('/',function(req,res){
//     res.send(fakeData);
// });

//  renders all users on home page
router.get('/', usersApi.renderAllUsers);

module.exports = router 