// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://sladesawyer:thudnob78@testcluster-81fgp.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// requirements: import mongoose
mongoose = require('mongoose');

// Connect to a local database called "the-donut-shop"
// When it connects, then console.log "Connected to MongoDB"

const connectionString = "mongodb+srv://sladesawyer:thudnob78@testcluster-81fgp.mongodb.net/test?retryWrites=true"
// const connectionString = "mongodb://localhost/indexCards"
mongoose.connect(connectionString, {useNewURLParser: true})
    .then(() => {
        console.log('connected to mongo at ' + connectionString);
    });

// export your mongoose connection

module.exports = mongoose;