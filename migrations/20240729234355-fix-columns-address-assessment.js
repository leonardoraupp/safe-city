'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // Drop existing columns
    await queryInterface.removeColumn('AddressesAssessments', 'userId');
    await queryInterface.removeColumn('AddressesAssessments', 'updatedAt');

    // Add columns back with allowNull set to true
    await queryInterface.addColumn('AddressesAssessments', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addColumn('AddressesAssessments', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // Revert the changes if needed
    await queryInterface.removeColumn('AddressesAssessments', 'userId');
    await queryInterface.removeColumn('AddressesAssessments', 'updatedAt');
  }
};
