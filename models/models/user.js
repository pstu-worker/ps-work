
module.exports = function(sequelize, Sequelize) {

  var User = sequelize.define('user', {

    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false
    },

    last_login: {
      type: Sequelize.DATE
    },

    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('NOW()')
    },

    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.NULL
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['username']
      }
    ]
  });
  return User;
};
