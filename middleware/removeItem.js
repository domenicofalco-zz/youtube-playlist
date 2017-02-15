const removeItem = require('express').Router();
const bodyParser = require('body-parser')
const mongoUtil = require('./mongoUtil');
const db = mongoUtil.getDb();

removeItem.use(bodyParser.urlencoded({extended: true}));


module.exports = removeItem;
