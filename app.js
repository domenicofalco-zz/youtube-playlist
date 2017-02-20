// dependencies
const path = require('path');
const express = require('express');

// backend communications
const routes = require('./middleware/routes');
const api = require('./middleware/api');
const db = require('./database/db-connection');

//
const config = require('./app-config');

// define main application
const app = express();

// verify db connection
db.on('error', (err) => { console.log('*** Db error:', err) });
db.once('open', () => { console.log('*** Db connected *** ') });

// define /public path for: index.html, JS & CSS folders
app.use(express.static(config.publicPath));

// inject APIs & routes in the app
app.use('/api', api);
app.use('/', routes);

module.exports = app;
