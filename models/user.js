'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    business: DataTypes.ENUM('Escape This Live Indianapolis', 'Breakout Games-North', 'Breakout Games-South', 'Escape the Room', 'Escape INDY', 
          'The Escape Room - Indianapolis', 'The Escape Room - Fishers', 'Twisted Room Escapes'),
    phone: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM('user', 'business', 'admin'),
      defaultValue: 'user'
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};