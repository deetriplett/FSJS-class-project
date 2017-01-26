// src/server.js
const express = require('express');
const config =require('./config');

const app = express();

app.use('./hello/:name', function(req, res, next) {
  res.end('Hello ${req.params.name}');
}
        
app.use(function (req, res, next) {
  res.format({
    html: ()=> res.send(`
    <h1>Our Project</h1>
    <ul>
    <li>Get list of files (inc meta data)</li>
    <li>Upload file</li>
    <li>Edit file</li>
    <li>Delete FIle</li>
    </ul>
    `)
  })
  res.end('Documentation http://express.js.com/');
});


app.listen(8080, function() {
  console.log("I AM LISTENING ON PORT" + config.port + " !!!");
});
