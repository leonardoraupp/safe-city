'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Adressassessments', [{
      userId: 2,
      adressId: 1,
      score: 10,
      comment: 'Segura',
      updatedAt: new Date(),
      createdAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Adressassessments', null, {});
  }
};
