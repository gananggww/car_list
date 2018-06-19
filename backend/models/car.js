'use strict';
module.exports = (sequelize, DataTypes) => {
  var Car = sequelize.define('Car', {
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    color: DataTypes.STRING,
    mileage: DataTypes.STRING,
    engine: DataTypes.STRING,
    power: DataTypes.STRING,
    regis_date: DataTypes.DATE,
    price: DataTypes.STRING,
    garages_id: DataTypes.INTEGER
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
  };
  return Car;
};