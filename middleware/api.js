const api = require('express').Router();
const mongoUtil = require('./mongoUtil');
const db = mongoUtil.getDb();

// "send" method creates an API available in "/api"
api.get('/api', function (req, res) {

  db.collection('playlist').find().toArray(function(err, results) {
    // "index" is hbs template and it gets "playlist" collection from DB
    res.send({playlist: results})
  })
})

module.exports = api;
