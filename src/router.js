
let express = require('express'),
    Router = express.Router(),
    db = require('../models/models'),
    bCrypt = require('bcrypt-nodejs'),
    _MESSAGE = require('../constants/message');

Router.route('/sign_in').post(function (request, response) {
  let message;

  let info = {
    'username': request.body['username'],
    'password': request.body['password']
  };

  let isValidPassword = function (pass, password) {
    return bCrypt.compareSync(password, pass);
  };
  console.log(info.username);
  db['user'].findOne({
    where: {
      username: info.username
    }
  })
    .then(results => {
      message = !results ? _MESSAGE['US_NOT_TKN'] :
        !isValidPassword(results.dataValues['password'], info.password) ? _MESSAGE['INCRT_PSWD'] : _MESSAGE['SCS_SGN_N'];
      response.json(message);
  })
    .error(error => {
      error = _MESSAGE['SGN_ER_WRG'];
      response.json(error);
    });
});

  // app.get('/', function(req, res) {
  //   res.send({state: 'success', user: req.user ? req.user : null});
  // });
  //
  // app.get('/success', function(req, res){
  //   res.send({state: 'success', user: req.user ? req.user : null});
  // });
  //
  // app.get('/failure', function(req, res){
  //   res.send({state: 'failure', user: null, message: "Invalid username or password"});
  // });
  //
  // app.post('/sign_up', pass.authenticate('sign_up',
  //   {
  //     successRedirect: '/',
  //     failureRedirect: '/failure'
  //   }
  // ));
  // app.post('/sign_in', pass.authenticate('sign_in',
  //    {
  //      successRedirect: '/',
  //      failureRedirect: '/failure'
  //    }
  // ));

  // function isLoggedIn(req, res, next) {
  //   if (req.isAuthenticated())
  //     return next();
  //   res.redirect('/sign_in');
  // }

module.exports = Router;
