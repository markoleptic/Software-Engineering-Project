const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userselected', {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    anime_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
  }
}, {
    sequelize,
    tableName: 'userselected',
    timestamps: false,
  });
};