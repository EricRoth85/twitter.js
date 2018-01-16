const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweetsReq = tweetBank.list();
  res.render( 'index', { tweets: tweetsReq } );
});

router.get('/users/:name', function(req, res) {
  var nameReq = req.params.name;
  var tweetsList = tweetBank.find( {name: nameReq} );
  res.render( 'index', { tweets: tweetsList } );
});

module.exports = router;
