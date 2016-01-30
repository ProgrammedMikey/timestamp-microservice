'use strict';

var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000; 


app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));

app.post('/api/:timestamp', function(req, res) {
  var _input = req.params.timestamp;

  function formatTime(input) {

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date;
    var _unix;
    var _natural;

    if (Number.parseInt(input)) {
      date = new Date(Number.parseInt(input) * 1000);
    } else if (new Date(input)) {
      date = new Date(input);
    }

    if (date != 'Invalid Date') {
      _unix = date.valueOf() / 1000;
      _natural = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    } else {
      _unix = 'null';
      _natural = 'null';
    }

    return {
      unix: _unix,
      natural: _natural
    };

  }

  res.send(formatTime(_input));

});

app.listen(PORT,  function () {
  console.log('Listening on port %s ', + PORT + '!');
});
