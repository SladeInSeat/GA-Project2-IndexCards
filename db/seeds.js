let User = require('../models/User.js');
let Topic = require('../models/Topic.js');
let Card = require('../models/Card.js');

let newUsers = [
    {
    userName: 'Slade',
    lastLogInDate: Date.now()
    },
    {
    userName: 'John',
    lastLogInDate: Date.now()
    }
];

User.create(newUsers)
    .then(users => {
        console.log('created these users:' + users)
    });

User.find().then(allUsers => console.log('found these users:' + allUsers + ' 1st user: ' + allUsers[0] + ' _id: ' + allUsers[0]._id));


