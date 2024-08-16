'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('AddressesAssessments', 'score', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.addColumn('AddressesAssessments', 'comment', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('AddressesAssessments', 'score');
    await queryInterface.removeColumn('AddressesAssessments', 'comment');
  }
};