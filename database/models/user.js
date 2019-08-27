'use strict';
module.exports = (sequelize, DataTypes) => {
  const USER = sequelize.define('USER', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATE,
  }, {});
  USER.associate = function(models) {
    // associations can be defined here
    USER.hasOne(models.plan, {
      foreignKey : "id",
      as : 'plan'
    })
  };
  return USER;
};