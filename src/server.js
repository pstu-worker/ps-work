
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require('../models/models');
var authRoute = require('./router');

const app = express();
//For BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(bodyParser.json());

// function redirectRouterLessonUnmatched(req,res) {
//   res.sendFile("index.html", { root: './index.html' });
// }
// app.use(redirectRouterLessonUnmatched);

//Sync Database
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Database is connected')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
db.sequelize.sync();

const port = process.env.PORT || 4000;

// Routes
app.use('/', authRoute);

app.listen(port, function(err) {
  if (!err)
    console.log("Start project... OK, port: " + port);
  else console.log(err)
});
