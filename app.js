// dependencies
import path from 'path';
import express from 'express';

// backend communications
import routes from './middleware/routes';
import api from './middleware/api';
import db from './database/db-connection';

// import configuration from webpack
import config from './webpack.config';

// define main application
const app = express();

// verify db connection
db.on('error', (err) => { console.log('*** Db error:', err) });
db.once('open', () => { console.log('*** Db connected *** ') });

// define /public path for: index.html, JS & CSS folders
app.use(express.static(config.output.publicPath));

// inject APIs & routes in the app
app.use('/', api);
app.use('/', routes);

module.exports = app;
