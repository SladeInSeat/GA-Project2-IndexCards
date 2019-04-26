const mongoose = require('../db/connection.js');
const objectId = mongoose.Schema.Types.objectId

const cardSchema = mongoose.Schema({
    cardPrompt = String,
    cardAnswer = String,
    correctAnswerStreak = Number,
    lastStreakDate = Date,
    parentTopic: objectId
});

let Card = mongoose.model('Card', cardSchema);

module.exports = Card;