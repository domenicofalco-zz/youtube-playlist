const routes = require('express').Router();
const VideoSchema = require('../database/schema/VideoSchema');
const bodyParser = require('body-parser')

routes.use(bodyParser.urlencoded({extended: true}));

// set routes "/", load DB and pass it in the template index.hbs
routes.get('/', (req, res) => {
  VideoSchema.find({}, (err, results) => {
    res.render('index', {playlist: results});
  })
});

// save new data into DB
routes.post('/insertVideo', (req, res) => {
  const video = {
    title: req.body.title,
    url: req.body.url,
    image: req.body.image
  };

  const data = new VideoSchema(video);

  data.save();
  res.redirect('/');
});

// set routes "/test"
routes.get('/test', (req, res) => {
  res.render('exampleTemplate');
});

module.exports = routes;
