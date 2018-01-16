const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweetsReq = tweetBank.list();

  res.render( 'index', { tweets: tweetsReq, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var nameReq = req.params.name;
  var tweetsList = tweetBank.find( {name: nameReq} );
  res.render( 'index', { tweets: tweetsList, showForm: true, showUser: true, userName: nameReq } );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.get('/tweets/:id', function(req, res) {
  var idReq = +req.params.id;
  var userData = tweetBank.find( {id: idReq} );
  console.log( idReq, userData[0].content)
  res.render( 'index', { tweets: userData } );
});


//showForm: true
// req.body.name and req.body.content
module.exports = router;
