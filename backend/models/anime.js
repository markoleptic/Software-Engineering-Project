const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anime', {
    anime_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    episodes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    members: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'anime',
    timestamps: false
  });
};
