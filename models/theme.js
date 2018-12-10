// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Theme = sequelize.define('Theme', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    minimum: DataTypes.INTEGER,
    maximum: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
    difficulty: DataTypes.STRING
  }, {});
  Theme.associate = function(models) {
    // associations can be defined here
  };
  return Theme;
};