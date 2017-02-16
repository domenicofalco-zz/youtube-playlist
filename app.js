// dependencies
const path = require('path');
const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');

// backend communications
const routes = require('./middleware/routes');
const api = require('./middleware/api');
const db = require('./database/db-connection');

// set directories
const publicPath = path.join(__dirname, 'public');
const viewPath = path.join(__dirname, 'frontend/templates')

// verify db connection
db.on('error', (err) => { console.log('*** Db error:', err) });
db.once('open', () => { console.log('*** Db connected *** ') });

// define relative path to link JS / CSS in hbs template
app.use(express.static(publicPath));

// enable "hbs" extension & specify templates folder
app.engine('hbs', exphbs({
  defaultLayout: 'layout',
  extname: 'hbs',
  layoutsDir: viewPath
}));
app.set('views', viewPath);
app.set('view engine', 'hbs')

// inject routes & APIs in the app
app.use('/', routes);
app.use('/', api);

module.exports = app;
