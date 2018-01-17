const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function(io) {
  router.get('/', function(req, res) {
    const tweetsReq = tweetBank.list();
    res.render('index', { tweets: tweetsReq, showForm: true });
  });

  router.get('/users/:name', function(req, res) {
    const nameReq = req.params.name;
    const tweetsList = tweetBank.find({ name: nameReq });
    res.render('index', {
      tweets: tweetsList,
      showForm: true,
      showUser: true,
      userName: nameReq
    });
  });

  router.post('/tweets', function(req, res) {
    const name = req.body.name;
    const text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });

  router.get('/tweets/:id', function(req, res) {
    const idReq = +req.params.id;
    const userData = tweetBank.find({ id: idReq });
    console.log(idReq, userData[0].content);
    res.render('index', { tweets: userData });
  });

  io.sockets.emit('newTweet', { text: 'test' });
  //showForm: true
  // req.body.name and req.body.content
  // module.exports = router;
  return router;
};

//{ for: 'everyone' }
