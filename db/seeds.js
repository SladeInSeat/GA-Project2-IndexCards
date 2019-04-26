let User = require('../models/User.js');
let Topic = require('../models/Topic.js');
let Card = require('../models/Card.js');

// let newUsers = [
//     {
//     userName: 'Slade',
//     lastLogInDate: Date.now()
//     },
//     {
//     userName: 'John',
//     lastLogInDate: Date.now()
//     }
// ];

// User.create(newUsers)
//     .then(users => {
//         console.log('created these users:' + users)
//     });




// let newTopics = [
//     {
//         topicName: 'HTML',
//         topicDescription: 'Definitions of common HTML commands and tags',
//         parentUser: '5cc3378f2e82c10db3451038',
//         lastCompletedDate: Date.now()
//     },
//     {
//         topicName: 'Javascript',
//         topicDescription: 'Vanilla javascript datatypes and functions',
//         parentUser: '5cc3378f2e82c10db3451038',
//         lastCompletedDate: Date.now()
//     }
// ]

// Topic.create(newTopics).then(topics => {
//     console.log('create these topics: ' + topics + 'with these parentUsers: ' + topics[0].parentUser)
// });

// let http = '5cc34928e1abbd132e0dd2f3'
// let js = '5cc34928e1abbd132e0dd2f4'

let newCards = [
    {
        cardPrompt: 'img',
        cardAnswer: 'image tag, inserts an image file into page. Syntax: <img src=<path to image file> *alt=<path to backup file> *width=<unit> *heigth=<unit>',
        correctAnswerStreak: 0,
        lastStreakDate: Date.now(),
        parentTopic: '5cc34928e1abbd132e0dd2f3'
    },
    {   
        cardPrompt: 'br',
        cardAnswer: 'Inserts a line break into the page. No closing tag',
        correctAnswerStreak: 0,
        lastStreakDate: Date.now(),
        parentTopic: '5cc34928e1abbd132e0dd2f3'
    },
    {   
        cardPrompt: 'object',
        cardAnswer: 'A collection of properties in key-value pairs. Keys must be strings. Values can be anything, even functions',
        correctAnswerStreak: 0,
        lastStreakDate: Date.now(),
        parentTopic: '5cc34928e1abbd132e0dd2f4'
    },
    {
        cardPrompt: '.push',
        cardAnswer: 'A method of Arrays. Adds one or more element to the end of calling array. array.push(<element>)',
        correctAnswerStreak: 0,
        lastStreakDate: Date.now(),
        parentTopic: '5cc34928e1abbd132e0dd2f4'
    }
]

Card.create(newCards).then(cards => {
    console.log('created these cards' + cards)});



