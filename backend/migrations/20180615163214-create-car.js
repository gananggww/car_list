'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      mileage: {
        type: Sequelize.STRING
      },
      engine: {
        type: Sequelize.STRING
      },
      power: {
        type: Sequelize.STRING
      },
      regis_date: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.STRING
      },
      garages_id: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Cars');
  }
};