"use strict";

const membershipTypes = Object.freeze({
  limited: "limited",
  unlimited: "unlimited"
});
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define(
    "plan",
    {
      membershipName: DataTypes.STRING,
      membershipType: {
        type: DataTypes.ENUM,
        values: [membershipTypes.unlimited, membershipTypes.limited]
      },
      membershipStartDate: DataTypes.DATE,
      membershipEndDate: DataTypes.DATE
    },
    {
      hooks: {
        beforeCreate: (plan, options) => {
          plan.membershipEndDate =
            plan.membershipType === membershipTypes.unlimited
              ? null
              : plan.membershipEndDate;
        }
      }
    }
  );
  Plan.associate = function(models) {
    // associations can be defined here
    Plan.belongsTo(models.user, {
      foreignKey : "userId",
      as : 'user'
    });
  };

  return Plan;
};
