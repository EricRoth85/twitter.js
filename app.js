const express = require( 'express' );
const app = express();

app.listen(3000, () => console.log("Server running"))

app.get('/', function(req, res, next) {
  res.send("<h1> get working </h1>")
})
