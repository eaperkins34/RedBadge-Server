'use strict';
const Sequelize = require('sequelize')
const sequelize = require('../db')

module.exports = (sequelize, DataTypes) => {
  const Theme = sequelize.define('theme', {
    name: Sequelize.STRING,
    description: Sequelize.STRING(1000),
    minimum: Sequelize.INTEGER,
    maximum: Sequelize.INTEGER,
    length: Sequelize.INTEGER,
    difficulty: Sequelize.STRING
  });
  Theme.associate = models => {
    Theme.belongsTo(models['business'])
  };

  return Theme;
};