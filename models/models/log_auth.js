
module.exports = function(sequelize, Sequelize) {

  var LogAuth = sequelize.define('log_auth', {

    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    status: {
      type: Sequelize.ENUM('active', 'inactive', 'changed'),
      defaultValue: 'active'
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
  return LogAuth;
};
