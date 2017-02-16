const MongoClient = require('mongodb').MongoClient;
let db;

module.exports = {

  connectToServer: function(callback) {
    MongoClient.connect('mongodb://domenico:domenico@ds151909.mlab.com:51909/youtubeplaylist', (err, database) => {
      db = database;
      return callback(err);
    });
  },

  getDb: function() {
    return db;
  }

};
