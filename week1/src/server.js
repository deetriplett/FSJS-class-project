// src/server.js
const express = require('express');
const config =require('./config');

const app = express();

app.use('./hello/:name', function(req, res, next) {
  res.end('Hello ${req.params.name}');
}
        
app.use(function(req, res, next) {
  res.end("Documentation http://expressjs.com/");
});

app.listen(8080, function() {
  console.log("I AM LISTENING ON PORT" + port.name + " !!!");
});
