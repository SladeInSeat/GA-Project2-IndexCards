const express = require('express')
const router = express.Router()
const usersApi = require('../apis/users.js')
const topicsApi = require('../apis/topics.js')
const cardsApi = require('../apis/cards.js')

//  renders all users on home page
// router.get('/', usersApi.renderAllUsers);

//  render landing page
router.get("/", usersApi.renderLandingPage)

//  render all users
router.get("/showUsers",usersApi.renderAllUsers)

module.exports = router 