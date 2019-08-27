'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId : {
        type : Sequelize.INTEGER,
        allowNull : false,
        unique : true,
        references : {
          model : 'users',
          key : 'id'
        }
      },
      membershipName : {
        type : Sequelize.STRING,
        allowNull : false
      },
      membershipType: {
        type: Sequelize.ENUM('limited', 'unlimited'),
        allowNull : false
      },
      membershipStartDate :{
        type : Sequelize.DATE,
        allowNull : false
      },
      membershipEndDate :{
        type : Sequelize.DATE,
        allowNull : true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('plans');
  }
};