'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
