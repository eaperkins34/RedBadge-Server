'use strict';
const Sequelize = require('sequelize')
const sequelize = require('../db')

module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('business', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    hours: DataTypes.ARRAY(DataTypes.TEXT),
    price: DataTypes.DECIMAL,
    number_of_rooms: DataTypes.INTEGER,
    url: DataTypes.STRING,
    themes: DataTypes.ARRAY(DataTypes.TEXT),
    image: DataTypes.STRING
  });

  // Business.associate = models =>{
  //   Business.hasMany(models.theme, { as: 'roomTheme'})
  // };
  return Business;
};