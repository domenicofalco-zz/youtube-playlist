const express = require('express');
const VideoData = require('../database/schema/VideoSchema');

const api = express.Router();

// API available in "/api" root. Example:
api.get('/playlists', (req, res) => {
  VideoData.find({}, (err, data) => {
    res.send(data);
  })
});

module.exports = api;
