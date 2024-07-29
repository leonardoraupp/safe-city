'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Drop existing columns
    await queryInterface.removeColumn('AssessmentAddress', 'userId');
    await queryInterface.removeColumn('AssessmentAddress', 'updatedAt');

    // Add columns back with allowNull set to true
    await queryInterface.addColumn('AssessmentAddress', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addColumn('AssessmentAddress', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // Revert the changes if needed
    await queryInterface.removeColumn('AssessmentAddress', 'userId');
    await queryInterface.removeColumn('AssessmentAddress', 'updatedAt');
  }
};
