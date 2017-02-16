const routes = require('express').Router();
const VideoData = require('../database/schema/VideoSchema');
const bodyParser = require('body-parser')

routes.use(bodyParser.urlencoded({extended: true}));

// set routes "/", load DB and pass it in the template index.hbs
routes.get('/', (req, res) => {
  VideoData.find({}, (err, results) => {
    res.render('pages/index', {playlist: results});
  })
});

// save new data into DB
routes.post('/insert', (req, res) => {
  const video = {
    title: req.body.title,
    url: req.body.url,
    image: req.body.image
  };

  const data = new VideoData(video);

  data.save();
  res.redirect('/');
});

// delete data from DB (needs to be enabled in the .hbs)
routes.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  VideoData.findByIdAndRemove(id).exec();
  res.redirect('/');
});

// select data from the DB that needs to be edited
routes.post('/edit/:id', (req, res) => {
  const id = req.params.id;
  VideoData.findById(id, (err, video) => {
    res.render('pages/edit', video);
  });
});

// finalize edit data from DB
routes.post('/update/:id', (req, res) => {
  const id = req.params.id;

  const video = {
    title: req.body.title,
    url: req.body.url,
    image: req.body.image
  };

  VideoData.findByIdAndUpdate(id, video, {new: true}).exec();
  res.redirect('/');
});

module.exports = routes;
