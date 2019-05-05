const express = require('express')
const router = express.Router()
const usersApi = require('../apis/users.js')
const topicsApi = require('../apis/topics.js')
const cardsApi = require('../apis/cards.js')


//  render landing page
router.get("/", usersApi.renderLandingPage)

//  create new user from landing page, redirect to showUsers
router.post("/", usersApi.createUser)

//  render all users
router.get("/showUsers",usersApi.renderAllUsers)

//  render single user
router.get("/:userId", usersApi.renderSingleUser)

//  render user edit page
router.get("/:userId/editUser", usersApi.renderUserEdit)

//  update user name
router.patch("/:userId/editUser", usersApi.updateUser)

//  delete user
router.delete("/:userId/editUser", usersApi.deleteUser)

//  show all topics of one user
router.get("/:parentUserId/showTopics", topicsApi.renderAllTopics)

//  show create topic page
router.get("/:userId/createTopic",topicsApi.renderCreateTopic)

//  create topic
router.post("/:userId/createTopic",topicsApi.createTopic)

//  delete topic
router.delete("/:userId/topic/:topicId", topicsApi.deleteTopic)

//  show single topic
router.get("/:userId/topic/:topicId", topicsApi.renderSingleTopic)

// show edit topic
router.get("/:userId/editTopic/:topicId", topicsApi.renderTopicEdit)

// update topic
router.patch("/:userId/editTopic/:topicId", topicsApi.updateTopic)

//  show all cards for a topic
router.get("/:userId/topic/:topicId/cards", cardsApi.renderAllCards)

//  show one card
router.get("/:topicId/cards/:cardId", cardsApi.renderSingleCard)

//  show create card
router.get("/:topicId/createCard", cardsApi.renderCreateCard)

//  create card
router.post("/:topicId/createCard", cardsApi.createCard)

//  delete card
router.delete("/:topicId/editCard/:cardId", cardsApi.deleteCard)

// show update card
router.get("/:topicId/editCard/:cardId", cardsApi.renderCardEdit)

//  update card
router.patch("/:topicId/editCard/:cardId", cardsApi.updateCard)


module.exports = router 