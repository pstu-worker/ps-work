
var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');

//For BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// For Passport
app.use(session({
  secret: 'ps-works',
  resave: true,
  saveUninitialized: true
}));// session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.listen(4200, function(err) {
  if (!err)
    console.log("Start project... OK");
  else console.log(err)
});
