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


module.exports = router 