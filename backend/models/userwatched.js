const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userwatched', {
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
    tableName: 'userwatched',
    timestamps: false,
  });
};