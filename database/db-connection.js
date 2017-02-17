// db connection
import mongoose from 'mongoose';
const uri = 'mongodb://localhost/youtubeplaylist';

mongoose.connect(uri);

module.exports = mongoose.connection;
