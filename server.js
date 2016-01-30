'use strict';

var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000; 

app.use(express.static(__dirname + '/public')); 

app.listen(PORT, function () { 
	console.log('Express server started on port ' + PORT '!'); 

});
