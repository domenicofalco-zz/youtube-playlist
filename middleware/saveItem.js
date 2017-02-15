const saveRoot = require('express').Router();
const bodyParser = require('body-parser')
const mongoUtil = require('./mongoUtil');
const db = mongoUtil.getDb();

saveRoot.use(bodyParser.urlencoded({extended: true}));

saveRoot.post('/playlist', (req, res) => {
  db.collection('playlist').save(req.body, (err, result) => {
    if (err) return console.log(err)
    res.redirect('/')
  });
});

module.exports = saveRoot;
