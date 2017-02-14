var express = require('express')
var app = express()

var fs = require('fs')
var _ = require('lodash')
var engines = require('consolidate')


// data
var users = []
fs.readFile('videos.json', {encoding: 'utf8'}, function (err, data) {
  if (err) throw err

  JSON.parse(data).forEach(function (user) {
    user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
    users.push(user)
  })

})

// specify where the markup templates are
app.set('views', './templates')

// add hbs extension for the templates
app.engine('hbs', engines.handlebars)
app.set('view engine', 'hbs')

// "render" method pass the markup in the root "/"
app.get('/', function (req, res) {
  res.render('index', {users: users}) // use index.hbs in the root "/"
})
app.get('/test', function (req, res) {
  res.render('exampleTemplate') // use exampleTemplate.hbs in the root "/test"
})

// "send" method creates an API available in "/api"
app.get('/api', function (req, res) {
  res.send({id: "users"})
})


var server = app.listen(8888, function () {
  console.log('Example app listening on port 8888!')
})
