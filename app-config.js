const port = 8888;
const publicPath = 'public/';
const baseURL = 'http://localhost:8888/';
const playlistAPI = baseURL + 'api/playlists';
const insertURI = baseURL + 'insert/';
const removeURI = baseURL + 'delete/';
const db = 'mongodb://localhost/youtubeplaylist';

module.exports = {
  port,
  publicPath,
  baseURL,
  playlistAPI,
  insertURI,
  removeURI,
  db
};
