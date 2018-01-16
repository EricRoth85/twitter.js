const express = require( 'express' );
const app = express();

const nunjucks = require('nunjucks');
const routes = require('./routes');

// var nRender = nunjucks.render('index.html');
//need object that has title and person.name
// let person = {name: "Dave"};
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks


let indexCode = "";

nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//   console.log(output);
//   indexCode = output;
//   if(err) console.log(err)
// });

app.use('/', routes);

// app.use('/', function (req, res, next) {
//   console.log(req.method, req.path, res.statusCode)

//   next();
//   // do your logging here
//   // call `next`, or else your app will be a black hole — receiving requests but never properly responding
// })

// app.use('/news', function (req, res, next) {
//   console.log("request from /news")
//   // console.log(req.method, req.path, res.statusCode)

//   next();
// })


app.get('/', function(req, res, next) {
  res.render( 'index', {title: 'Hall of Fame', people: people} );

})

app.get('/news', function(req, res, next) {
  res.send("<h2> news yo </h2>")
})

app.listen(3000, (err) => {
  if(err) throw err;
  console.log("Server running")
})
