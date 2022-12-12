'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('genres');

  }
};