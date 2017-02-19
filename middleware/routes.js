const path = require('path');
const routes = require('express');
const VideoData = require('../database/schema/VideoSchema');
const bodyParser = require('body-parser');
const config = require('../webpack.config');

// define router from express
const router = routes.Router();

// get /public path
const publicPath = path.resolve(__dirname, '..', config.output.publicPath);

// enable express to get data from HTML
router.use(bodyParser.urlencoded({extended: true}));

// sync with react router
router.get('*', (req, res) => {
  res.sendFile(publicPath + '/index.html');
});

// save new data into DB
router.post('/insert', (req, res) => {
  const video = {
    title: req.body.title,
    url: req.body.url,
    image: req.body.image
  };

  const data = new VideoData(video);

  data.save();
  res.redirect('/');
});

router.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  VideoData.findByIdAndRemove(id).exec();
  res.redirect('/');
});

/*
router.post('/update/:id', (req, res) => {
  const id = req.params.id;

  const video = {
    title: req.body.title,
    url: req.body.url,
    image: req.body.image
  };

  VideoData.findByIdAndUpdate(id, video, {new: true});.exec();
  res.redirect('/');
});
*/

module.exports = router;
