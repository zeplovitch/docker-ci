// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';

var express = require('express'),
    app = express();



app.get('/', function(req, res) {
  res.send("hello world IddIIddI");
});

app.listen(8080);
module.exports.getApp = app;