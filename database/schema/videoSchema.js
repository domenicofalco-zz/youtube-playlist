const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: String,
  url: String,
  image: String
});

// "playlists" is the collection name in the DB
const VideoSchema = mongoose.model('playlists', schema);

module.exports = VideoSchema;
