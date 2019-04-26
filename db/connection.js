// requirements: import mongoose
mongoose = require('mongoose');

// Connect to a local database called "the-donut-shop"
// When it connects, then console.log "Connected to MongoDB"

// const connectionString = "mongodb+srv://sladesawyer:thudnob78@testcluster-81fgp.mongodb.net/test?retryWrites=true"
// const connectionString = "mongodb://localhost/indexCards"
// mongoose.connect(connectionString, {useNewURLParser: true})
//     .then(() => {
//         console.log('connected to mongo at ' + connectionString);
//     });


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

  // export your mongoose connection
  module.exports = mongoose;