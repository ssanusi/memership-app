'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('plan', {
    membershipName: DataTypes.STRING,
    membershipStartDate:DataTypes.DATE,
    membershipStartDate:DataTypes.DATE
  }, {});
  Plan.associate = function(models) {
    // associations can be defined here
    Plan.belongsTo(models.USER)
  };
  return plan;
};