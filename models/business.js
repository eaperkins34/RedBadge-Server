
// 'use strict';

module.exports = (sequelize, DataTypes) => {
    const Business = sequelize.define('Business', {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      phone: DataTypes.STRING,
      hours: DataTypes.ARRAY(DataTypes.TEXT),
      price: DataTypes.DECIMAL,
      number_of_rooms: DataTypes.INTEGER,
      url: DataTypes.STRING,
      themes: DataTypes.ARRAY(DataTypes.TEXT),
      image: DataTypes.STRING
    }, {});
    Business.associate = function(models) {
      // associations can be defined here
    };
    return Business;
  };