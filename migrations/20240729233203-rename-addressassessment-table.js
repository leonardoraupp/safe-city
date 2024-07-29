'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('AdressAssessments', 'AssessmentAddress');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('AdressAssessments', 'AssessmentAddress');
  }
};