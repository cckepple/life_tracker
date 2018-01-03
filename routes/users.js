var express = require('express');
var router = express.Router();
var debug = require('debug')('goaler:users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  debug('ok...');
  res.json([{id:1,name:'corey'}, {id:2, name:'courtney'}]);
});

module.exports = router;
