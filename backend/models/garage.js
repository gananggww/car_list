'use strict';
module.exports = (sequelize, DataTypes) => {
  var Garage = sequelize.define('Garage', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    max_car: DataTypes.STRING
  }, {});
  Garage.associate = function(models) {
    // associations can be defined here
  };
  return Garage;
};