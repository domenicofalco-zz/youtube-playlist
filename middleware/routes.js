const routes = require('express').Router();
const VideoData = require('../database/schema/VideoSchema');
const bodyParser = require('body-parser')

routes.use(bodyParser.urlencoded({extended: true}));

// sync with react router
routes.get('*', (req, res) => {
  VideoData.find({}, (err, results) => {
    //res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
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

routes.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  VideoData.findByIdAndRemove(id).exec();
  res.redirect('/');
});

/*
// TODO PROBABILEMTE NON SERIVE PIU L'EDIT, MA SOLO L'update
//select data from the DB that needs to be edited
routes.post('/edit/:id', (req, res) => {
const id = req.params.id;
VideoData.findById(id, (err, video) => {
res.render('pages/index', {video: video, pageTitle: 'Edit'});
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
});*/

module.exports = routes;
