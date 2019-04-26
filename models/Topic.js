const mongoose = require('../db/connection.js');
const objectId = mongoose.Schema.Types.ObjectId


const topicSchema = mongoose.Schema({
    topicName: String,
    topicDescription: String,
    parentUser: objectId,
    lastCompletedDate: Date,
});

let Topic = mongoose.model('Topic', topicSchema)

module.exports = Topic;