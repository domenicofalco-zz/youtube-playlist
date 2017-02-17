import mongoose from 'mongoose';

const schema = mongoose.Schema({
  title: String,
  url: String,
  image: String
});

// "playlists" is the collection name in the DB
const VideoData = mongoose.model('playlists', schema);

module.exports = VideoData;
