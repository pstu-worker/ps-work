
module.exports = function(sequelize, Sequelize) {

  var Role = sequelize.define('role', {

    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    role_name: {
      type: Sequelize.STRING,
      allowNull: false,
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
        fields: ['role_name']
      }
    ]
  });
  return Role;
};
