'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('AdressAssessment', 'score', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.addColumn('AdressAssessment', 'comment', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('AdressAssessment', 'score');
    await queryInterface.removeColumn('AdressAssessment', 'comment');
  }
};