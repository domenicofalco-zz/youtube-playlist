const app = require('express')();
const engines = require('consolidate');
const mongoUtil = require('./middleware/mongoUtil');
const port = 8888;

mongoUtil.connectToServer(function(err) {

  const routes = require('./middleware/routes');
  const saveItem = require('./middleware/saveItem');
  const removeItem = require('./middleware/removeItem');
  const api = require('./middleware/api');

  // EXTENSION TEMPLATE FILE
  app.engine('hbs', engines.handlebars);

  // HTML TEMPLATE FOLDER FOR THE VIEW
  app.set('views', './templates');

  // SPECIFY THE TEMPLATE EXTENSION THAT EXPRESS HAS TO HANDLE
  app.set('view engine', 'hbs')

  // inject routes in the app
  app.use('/', routes);
  app.use('/', api);
  app.use('/', saveItem);
  app.use('/', removeItem);
  //app.use('/', editRoot);

  // open server connection
  app.listen(port, () => {
    console.log('listening on ' + port);
  });

});
