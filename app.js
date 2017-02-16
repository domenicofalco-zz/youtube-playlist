const app = require('express')();
const templateEngine = require('consolidate');
const routes = require('./middleware/routes');
const api = require('./middleware/api');
const db = require('./database/db-connection')

// verify db connection
db.on('error', (err) => { console.log('*** Db error:', err) });
db.once('open', () => { console.log('*** Db connected *** ') });

// enable "hbs" extension & specify templates folder
app.engine('hbs', templateEngine.handlebars);
app.set('views', './frontend/templates');
app.set('view engine', 'hbs')

// inject routes & APIs in the app
app.use('/', routes);
app.use('/', api);

module.exports = app;
