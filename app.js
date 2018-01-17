const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];

const server = app.listen(3000, err => {
  if (err) throw err;
  console.log('Server running');
});

var io = socketio.listen(server); //server is app.listen!

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes(io));
app.use(express.static('public'));

// path.join(__dirname, "../public", "./public/stylesheets/style.css")

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Hall of Fame', people: people });
});

app.get('/news', function(req, res, next) {
  res.send('<h2>Latest news</h2>coming soon...');
});
