const app = require('express')();
const engines = require('consolidate');
const mongoUtil = require('./middleware/mongoUtil');
const port = 8888;

mongoUtil.connectToServer(function(err) {

  const routes = require('./middleware/routes');
  const saveRoot = require('./middleware/saveItem');
  const api = require('./middleware/api');

  // HTML TEMPLATE TO CONSIDER
  app.set('views', './templates')

  // SPECIFY THE TEMPLATE EXTENSION THAT EXPRESS HAS TO HANDLE
  app.engine('hbs', engines.handlebars)
  app.set('view engine', 'hbs')

  // inject routes in the app
  app.use('/', routes);
  app.use('/', api);
  app.use('/', saveRoot);
  //app.use('/', deleteRoot);
  //app.use('/', editRoot);

  // open server connection
  app.listen(port, () => {
    console.log('listening on ' + port);
  })

});
