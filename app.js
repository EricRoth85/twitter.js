const express = require( 'express' );
const app = express();
// console.log(express())



app.use('/', function (req, res, next) {
  console.log(req.method, req.path, res.statusCode)

  next();

  // do your logging here
  // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})

app.use('/news', function (req, res, next) {
  console.log("request from /news")
  // console.log(req.method, req.path, res.statusCode)

  next();
})



app.get('/', function(req, res, next) {
  res.send("<h1> get working </h1>")
})

app.get('/news', function(req, res, next) {
  res.send("<h2> news yo </h2>")
})

app.listen(3000, (err) => {
  if(err) throw err;
  console.log("Server running")
})
