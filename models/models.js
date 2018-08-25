
"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

fs
  .readdirSync(__dirname + '/models')
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname + '/models', file));
    db[model.name] = require(__dirname + '/models/' + model.name)(sequelize, Sequelize);
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
  // var data = require(__dirname + '/build_up/' + modelName);
  // db[modelName].create
});

module.exports = db;
