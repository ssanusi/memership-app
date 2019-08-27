'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATE,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.plan, {
      foreignKey : "id",
      as : 'plan'
    })
  };
  return User;
};