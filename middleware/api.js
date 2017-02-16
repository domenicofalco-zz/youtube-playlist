const api = require('express').Router();
const VideoData = require('../database/schema/VideoSchema');

// "send" method creates an API available in "/api" root. Example:
api.get('/api', (req, res) => {
  VideoData.find({}, (err, results) => {
    res.send({playlist: results});
  })
});

module.exports = api;
