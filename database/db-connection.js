// db connection
const mongoose = require('mongoose');
const uri = 'mongodb://localhost/youtubeplaylist';

mongoose.connect(uri);

module.exports = mongoose.connection;
