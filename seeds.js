let User = require('./models/User.js');
let Topic = require('./models/Topic.js');
let Card = require('./models/Card.js');
let mongoose = require('mongoose');

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  }
  else {
    mongoose.connect('mongodb://localhost/indexCards');
  }
  mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
  );
  mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
  });


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
//     .then(newusers => {
//         console.log('created these users:' + newusers)
//     });

User.find()
    .then(users => {
    Topic.create({topicName: 'HTML',
                    topicDescription: 'Definitions of common HTML commands and tags',
                    parentUser: users[0]._id,
                    lastCompletedDate: Date.now
                },
                {topicName:'Javascript',
                    topicDescription: 'Vanilla javascript datatypes and functions',
                    parentUser: users[0]._id,
                    lastCompletedDate: Date.now()
                })
    .then(newtopics => {
        console.log('created these topics: ' + newtopics)
    })
})

// Topic.find().then( topics => {
//     Card.create(    
//         {
//             cardPrompt: 'img',
//             cardAnswer: 'image tag, inserts an image file into page. Syntax: <img src=<path to image file> *alt=<path to backup file> *width=<unit> *heigth=<unit>',
//             correctAnswerStreak: 0,
//             lastStreakDate: Date.now(),
//             parentTopic: topics[0]._id
//         },
//         {   
//             cardPrompt: 'br',
//             cardAnswer: 'Inserts a line break into the page. No closing tag',
//             correctAnswerStreak: 0,
//             lastStreakDate: Date.now(),
//             parentTopic: topics[0]._id
//         },
//         {   
//             cardPrompt: 'object',
//             cardAnswer: 'A collection of properties in key-value pairs. Keys must be strings. Values can be anything, even functions',
//             correctAnswerStreak: 0,
//             lastStreakDate: Date.now(),
//             parentTopic: topics[1]._id
//         },
//         {
//             cardPrompt: '.push',
//             cardAnswer: 'A method of Arrays. Adds one or more element to the end of calling array. array.push(<element>)',
//             correctAnswerStreak: 0,
//             lastStreakDate: Date.now(),
//             parentTopic: topics[1]._id
//         })
//     .then(cards => {
//         console.log('created these cards' + cards)});
// })


