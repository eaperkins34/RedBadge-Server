'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    review: {
      type: DataTypes.CHAR(1000),
      allowNull: false},
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        min: [1],
        max: [5]
      }
  }},{});
  review.associate = function(models) {
    // associations can be defined here
  };
  return review;
};