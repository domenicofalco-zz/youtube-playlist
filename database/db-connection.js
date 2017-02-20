// db connection
const mongoose = require('mongoose');
const config = require('../app-config');

mongoose.connect(config.db);

module.exports = mongoose.connection;
