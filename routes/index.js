const express = require('express')
const router = express.Router()
const usersApi = require('../apis/users.js')
const topicsApi = require('../apis/topics.js')
const cardsApi = require('../apis/cards.js')

//  renders all users on home page
// router.get('/', usersApi.renderAllUsers);

//  render landing page
router.get("/", usersApi.renderLandingPage)

//  create new user from landing page, redirect to showUsers
router.post("/", usersApi.createUser)

//  render all users
router.get("/showUsers",usersApi.renderAllUsers)

//  render single user
router.get("/:id", usersApi.renderSingleUser)

//  render user edit page
router.get("/:id/editUser", usersApi.renderUserEdit)

//  update user name
router.patch("/:id/editUser", usersApi.updateUser)

//  delete user
router.delete("/:id/editUser", usersApi.deleteUser)

//  show all topics of one user
router.get("/:parentId/showTopics", topicsApi.renderAllTopics)

//  show create topic page
router.get("/:userId/createTopic",topicsApi.renderCreateTopic)

//  create topic
router.post("/:userId/createTopic",topicsApi.createTopic)

//  delete topic
router.delete("/:userId/topic/:topicId", topicsApi.deleteTopic)

//  show single topic
router.get("/:userId/topic/:topicId", topicsApi.renderSingleTopic)

// show edit topic
router.get("/:userId/edit/:topicId", topicsApi.renderTopicEdit)

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
router.get("/:topicId/editCard/:cardId", cardsApi.renderEditCard)

//  update card
router.patch("/:topicId/editCard/:cardId", cardsApi.updateCard)


module.exports = router 