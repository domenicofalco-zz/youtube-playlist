var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var fs = require('fs')
var _ = require('lodash')
var engines = require('consolidate')

var MongoClient = require('mongodb').MongoClient;


/*
  DB CONNECTION
*/
var db;
MongoClient.connect('mongodb://localhost/youtubeplaylist', (err, database) => {
  if (err) return console.log(err)
  db = database
})

/*
  HTML TEMPLATE TO CONSIDER
*/
app.set('views', './templates')


/*
  SPECIFY THE TEMPLATE EXTENSION THAT EXPRESS HAS TO HANDLE
*/
app.engine('hbs', engines.handlebars)
app.set('view engine', 'hbs')

/*
  SAVE METHODS
*/
// "render" method passes data in the root "/" as markup
app.get('/', function (req, res) {
  db.collection('playlist').find().toArray(function(err, results) {
    // "index" is hbs template and it gets "playlist" collection from DB
    res.render('index', {playlist: results})
  })
})
app.get('/test', function (req, res) {
  // use exampleTemplate.hbs in the root "/test"
  res.render('exampleTemplate')
})

/*
  SAVE METHODS
*/
app.use(bodyParser.urlencoded({extended: true}))
app.post('/playlist', (req, res) => {
  db.collection('playlist').save(req.body, (err, result) => {
    if (err) return console.log(err)
    res.redirect('/')
  })
})

/*
  CREATE API
*/
// "send" method creates an API available in "/api"
app.get('/api', function (req, res) {

  db.collection('playlist').find().toArray(function(err, results) {
    // "index" is hbs template and it gets "playlist" collection from DB
    res.send({playlist: results})
  })
})

/*
  OPEN SERVER CONNECTION
*/
app.listen(8888, () => {
  console.log('listening on 8888')
})
