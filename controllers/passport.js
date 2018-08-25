
bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, db) {
  LocalStrategy = require('passport-local').Strategy;

  //serialize
  passport.serializeUser(function(user, done) {
    console.log('Success');
    return done(null, user.id);
  });

  // deserialize user
  passport.deserializeUser(function(id, done) {
    db['user'].findById(id).then(function(err, user) {
      if(err){
        return done(err, false);
      }
      if(!user){
        return done(new Error('User not found'), false);
      }
      return done(user, true);
    });
  });

  passport.use('sign_in', new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function(req, username, password, done) {

      isValidPassword = function(userpass, password) {
        console.log('Success');
        return bCrypt.compareSync(password, userpass);
      };

      db['user'].findOne({
        where: {
          username: username
        }
      }).then(function(err, user) {
        if(err){
          return done(err, false);
        }

        if (!user) {
          return done(new Error('Username does not exist'), false);
        }

        if (!isValidPassword(user.password, password)) {
          return done(new Error('Incorrect password'), false);
        }

        return done(null, user);
      })
      .catch(function() {
        return done(new Error('Something went wrong with your Sign_in'), false);
      });
    }
  ));

  passport.use('sign_up', new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function(req, username, password, done) {
      generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      db['user'].findOne({
        where: {
          username: username
        }
      }).then(function(err, user) {

        if (err){
          return done(err, false);
        }

        if (user) {
          return done(new Error('Username already taken'), false);
        }

        newUser = {
          'username': username,
          'password': generateHash(password)
        };

        db['user'].create(newUser).then(function(newUser) {
          if(err){
            return done(err, false);
          }
          console.log('Successfully signed up User ' + user['username']);
          return done(null, newUser);
        });
      });
    }
  ));
};
