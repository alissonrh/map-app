'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("locations", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      boundaries: {
        type: Sequelize.GEOMETRY,
        allowNull: false,
      },
    },
      {
        timestamps: false,
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("locations");
  }
};
