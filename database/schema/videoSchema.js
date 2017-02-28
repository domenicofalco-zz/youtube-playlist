const mongoose = require('mongoose');

const schema = mongoose.Schema({
  playlistName: String,
  videoUrl: String
});

// "playlists" is the collection name in the DB
const VideoData = mongoose.model('playlists', schema);

module.exports = VideoData;
