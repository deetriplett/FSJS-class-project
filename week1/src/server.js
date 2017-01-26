// src/server.js
const express = require('express');
const config =require('./config');

const app = express();

//Response with Name
app.use('./hello/:name', function(req, res, next) {
  res.end('Hello ${req.params.name}');
}
//Response without name
app.use('/hello', function(req, res, next) {
    res.end('Hello Code Louisville');
});

//Retrieve data
app.use('/data,' function(req,res,next) {
  const myData = {}

  res.json(myData);
});

app.use(function (req, res, next) {
  res.format({
    html: ()=> res.send(`
    <h1>Our Project</h1>
    <ul>
    <li>Get list of files (inc meta data)</li>
    <li>Upload file</li>
    <li>Edit file</li>
    <li>Delete File</li>
    </ul>
    `)
  })
  res.end('Documentation http://express.js.com/');
});


app.listen(8080, function() {
  console.log("I AM LISTENING ON PORT" + config.port + " !!!");
});
