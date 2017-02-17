// dependencies
import path from 'path';
import express from 'express';

// backend communications
import routes from './middleware/routes';
import api from './middleware/api';
import db from './database/db-connection';

// set directories
const publicPath = path.join(__dirname, 'public');
const viewPath = path.join(__dirname, 'frontend/templates');

//
const app = express();

// verify db connection
db.on('error', (err) => { console.log('*** Db error:', err) });
db.once('open', () => { console.log('*** Db connected *** ') });

// define relative path to link JS / CSS in hbs template
app.use(express.static(publicPath));

// specify templates folder
app.set('views', viewPath);

// inject APIs & routes in the app
app.use('/', api);
app.use('/', routes);

module.exports = app;
