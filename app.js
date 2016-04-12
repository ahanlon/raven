var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');
var indexController = require('./controllers/index.js');
var mailController = require('./controllers/mail.js');


// configure express
var app = express();
app.set('port', process.env.PORT || 21);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.errorHandler());

// routes
app.get('/', indexController.index);
app.get('/about', indexController.about);
app.get('/contact', indexController.contact);
app.get('/services', indexController.services);


app.post('/mail', mailController.mail);



// start server
http.createServer(app).listen(3000, function(){
  console.log('Express server listening on port ' + app.get('port'));
});
