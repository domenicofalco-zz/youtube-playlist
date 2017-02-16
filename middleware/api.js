const api = require('express').Router();
const VideoSchema = require('../database/schema/VideoSchema');

// "send" method creates an API available in "/api" root. Example:
api.get('/api', (req, res) => {
  VideoSchema.find({}, (err, results) => {
    res.send({playlist: results});
  })
});

module.exports = api;
