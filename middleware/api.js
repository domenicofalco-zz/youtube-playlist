const express = require('express');
const VideoData = require('../database/schema/VideoSchema');

const api = express.Router();

// "send" method creates an API available in "/api" root. Example:
api.get('/api', (req, res) => {
  VideoData.find({}, (err, results) => {
    res.send({playlist: results});
  })
});

module.exports = api;
