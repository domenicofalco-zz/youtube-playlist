import path from 'path';
import routes from 'express';
import VideoData from '../database/schema/VideoSchema';
import bodyParser from 'body-parser';

const router = routes.Router();

router.use(bodyParser.urlencoded({extended: true}));

// sync with react router
router.get('*', (req, res) => {
  VideoData.find({}, (err, results) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
    //res.render('pages/index', {playlist: results});
  });
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
