const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    userID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "username",
      validate: {
        notEmpty: true,
        notNull: true,
        len: [4, 20],
    }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email",
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true,
    }
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
          notNull: true,
          notEmpty: true,
      }
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    refreshToken: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
  });
};
