const routes = require('express').Router();
const mongoUtil = require('./mongoUtil');
const db = mongoUtil.getDb();

routes.get('/', function (req, res) {
  db.collection('playlist').find().toArray(function(err, results) {
    // "render" method passes data in the root "/" as markup
    // "index" is the .hbs template and it gets "playlist" collection from DB
    res.render('index', {playlist: results})
  })
})
routes.get('/test', function (req, res) {
  // use exampleTemplate.hbs in the root "/test"
  res.render('exampleTemplate')
})

module.exports = routes;
