const express = require('express');
const VideoData = require('../database/schema/VideoSchema');

const api = express.Router();

// "send" method creates an API available in "/api" root. Example:
api.get('/playlists', (req, res) => {
  VideoData.find({}, (err, data) => {
    res.send(data);
  })
});

module.exports = api;
